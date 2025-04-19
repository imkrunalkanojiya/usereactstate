import React, { createContext, useContext, useReducer, useCallback, useMemo, useRef, useEffect } from 'react';
import { 
  StoreContextType, 
  Action, 
  State, 
  SetStatePayload, 
  StateProviderProps 
} from './ReactStateTypes';

// Create a context for our store
const StoreContext = createContext<StoreContextType | undefined>(undefined);

// Action types
export const SET_STATE = 'SET_STATE';
export const MERGE_STATE = 'MERGE_STATE';
export const DELETE_STATE = 'DELETE_STATE';

// Helper for debugging
export const logger = (enabled: boolean) => {
  if (!enabled) return () => {};
  return (action: Action, prevState: State, nextState: State) => {
    console.group(`%cAction: ${action.type}`, 'color: #8B5CF6; font-weight: bold');
    console.log('%cPrevious State:', 'color: #EF4444', prevState);
    console.log('%cPayload:', 'color: #F59E0B', action.payload);
    console.log('%cNew State:', 'color: #10B981', nextState);
    console.groupEnd();
  };
};

// Main reducer for state
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_STATE: {
      const { path, value } = action.payload as SetStatePayload;
      const keys = Array.isArray(path) ? path : path.split('.');
      const newState = { ...state };
      let current = newState;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        current[key] = current[key] ? { ...current[key] } : {};
        current = current[key];
      }
      
      current[keys[keys.length - 1]] = value;
      return newState;
    }
    case MERGE_STATE: {
      return { ...state, ...action.payload };
    }
    case DELETE_STATE: {
      const newState = { ...state };
      const path = action.payload as string | string[];
      const keys = Array.isArray(path) ? path : path.split('.');
      let current = newState;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key]) return state;
        current = current[key];
      }
      
      const lastKey = keys[keys.length - 1];
      if (current[lastKey] !== undefined) {
        delete current[lastKey];
      }
      
      return newState;
    }
    default:
      return state;
  }
};

// Listeners manager
type Listener = (state: State) => void;
class ListenersManager {
  private listeners: Map<string, Set<Listener>> = new Map();
  
  addListener(path: string, listener: Listener): () => void {
    if (!this.listeners.has(path)) {
      this.listeners.set(path, new Set());
    }
    
    this.listeners.get(path)!.add(listener);
    
    return () => {
      const listenersForPath = this.listeners.get(path);
      if (listenersForPath) {
        listenersForPath.delete(listener);
        if (listenersForPath.size === 0) {
          this.listeners.delete(path);
        }
      }
    };
  }
  
  notifyListeners(state: State, changedPaths: Set<string>): void {
    // Use a Set to avoid duplicate notifications
    const notifiedListeners = new Set<Listener>();
    const listenersToNotify: Array<Listener> = [];
    
    // First, collect all listeners that need to be notified
    changedPaths.forEach(changedPath => {
      this.listeners.forEach((listeners, listenerPath) => {
        // Notify if the listener path is affected by the change
        if (
          changedPath === listenerPath || 
          changedPath.startsWith(`${listenerPath}.`) || 
          listenerPath.startsWith(`${changedPath}.`) ||
          listenerPath === '' // Root listeners get notified for all changes
        ) {
          listeners.forEach(listener => {
            if (!notifiedListeners.has(listener)) {
              listenersToNotify.push(listener);
              notifiedListeners.add(listener);
            }
          });
        }
      });
    });
    
    // Notify all collected listeners
    if (listenersToNotify.length > 0) {
      // Execute all listeners immediately for best responsiveness
      listenersToNotify.forEach(listener => listener(state));
    }
  }
}

// Performance tracking
interface PerformanceEntry {
  action: string;
  time: number;
  path?: string;
}

class PerformanceTracker {
  private entries: PerformanceEntry[] = [];
  private maxEntries: number = 100;

  track(action: string, path?: string): [number, () => void] {
    const startTime = performance.now();
    return [
      startTime,
      () => {
        const endTime = performance.now();
        const time = endTime - startTime;
        this.entries.push({ action, time, path });
        
        // Keep only the last maxEntries
        if (this.entries.length > this.maxEntries) {
          this.entries = this.entries.slice(-this.maxEntries);
        }
      }
    ];
  }

  getEntries(): PerformanceEntry[] {
    return [...this.entries];
  }

  clear(): void {
    this.entries = [];
  }

  getAverageTime(action: string): number {
    const actionEntries = this.entries.filter(entry => entry.action === action);
    if (actionEntries.length === 0) return 0;
    
    const sum = actionEntries.reduce((acc, entry) => acc + entry.time, 0);
    return sum / actionEntries.length;
  }
}

// State provider component
export const StateProvider: React.FC<StateProviderProps> = ({ 
  children, 
  initialState = {}, 
  debug = false 
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateRef = useRef(state);
  const listenersManager = useRef(new ListenersManager());
  const performanceTracker = useRef(new PerformanceTracker());
  const log = useMemo(() => logger(debug), [debug]);
  
  // Update stateRef whenever state changes
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  
  const findChangedPaths = (prevState: State, nextState: State, parentPath = ''): Set<string> => {
    const changedPaths = new Set<string>();
    const allKeys = new Set([
      ...Object.keys(prevState), 
      ...Object.keys(nextState)
    ]);
    
    allKeys.forEach(key => {
      const currentPath = parentPath ? `${parentPath}.${key}` : key;
      const prevValue = prevState[key];
      const nextValue = nextState[key];
      
      // Value was added or removed
      if (prevValue === undefined || nextValue === undefined) {
        changedPaths.add(currentPath);
        changedPaths.add(parentPath); // Parent also changed
        return;
      }
      
      // Value is an object that we need to recursively check
      if (
        typeof prevValue === 'object' && 
        typeof nextValue === 'object' && 
        prevValue !== null && 
        nextValue !== null &&
        !Array.isArray(prevValue) && 
        !Array.isArray(nextValue)
      ) {
        const nestedChanges = findChangedPaths(prevValue, nextValue, currentPath);
        nestedChanges.forEach(path => changedPaths.add(path));
        if (nestedChanges.size > 0) {
          changedPaths.add(currentPath);
        }
      } 
      // Simple value change
      else if (JSON.stringify(prevValue) !== JSON.stringify(nextValue)) {
        changedPaths.add(currentPath);
        changedPaths.add(parentPath); // Parent also changed
      }
    });
    
    return changedPaths;
  };
  
  const setState = useCallback((path: string | string[], value: any) => {
    // Start performance tracking
    const [startTime, endTracking] = performanceTracker.current.track('setState', Array.isArray(path) ? path.join('.') : path);
    
    // Get current state and prepare action
    const prevState = stateRef.current;
    const action = { type: SET_STATE, payload: { path, value } };
    
    // Calculate the next state
    const nextState = reducer(prevState, action);
    
    // Debug logging if enabled
    log(action, prevState, nextState);
    
    // Find which paths changed before updating the state
    const changedPaths = findChangedPaths(prevState, nextState);
    
    // Update React state
    dispatch(action);
    
    // Optimistically update state reference for immediate access
    stateRef.current = nextState;
    
    // Notify listeners with the new state
    listenersManager.current.notifyListeners(nextState, changedPaths);
    
    // End performance tracking
    endTracking();
  }, [log]);
  
  const mergeState = useCallback((partialState: Partial<State>) => {
    // Track performance
    const [startTime, endTracking] = performanceTracker.current.track('mergeState');
    
    // Get current state and prepare action
    const prevState = stateRef.current;
    const action = { type: MERGE_STATE, payload: partialState };
    
    // Calculate the next state
    const nextState = reducer(prevState, action);
    
    // Debug logging
    log(action, prevState, nextState);
    
    // Find which paths changed
    const changedPaths = findChangedPaths(prevState, nextState);
    
    // Update React state
    dispatch(action);
    
    // Optimistically update state reference for immediate access
    stateRef.current = nextState;
    
    // Notify listeners with the new state
    listenersManager.current.notifyListeners(nextState, changedPaths);
    
    endTracking();
  }, [log]);
  
  const deleteState = useCallback((path: string | string[]) => {
    // Track performance
    const [startTime, endTracking] = performanceTracker.current.track('deleteState', Array.isArray(path) ? path.join('.') : path);
    
    // Get current state and prepare action
    const prevState = stateRef.current;
    const action = { type: DELETE_STATE, payload: path };
    
    // Calculate the next state
    const nextState = reducer(prevState, action);
    
    // Debug logging
    log(action, prevState, nextState);
    
    // Find which paths changed
    const changedPaths = findChangedPaths(prevState, nextState);
    
    // Update React state
    dispatch(action);
    
    // Optimistically update state reference for immediate access
    stateRef.current = nextState;
    
    // Notify listeners with the new state
    listenersManager.current.notifyListeners(nextState, changedPaths);
    
    endTracking();
  }, [log]);
  
  const getState = useCallback((path: string | string[] | null = null): any => {
    const currentState = stateRef.current;
    
    if (!path) return currentState;
    
    const keys = Array.isArray(path) ? path : path.split('.');
    return keys.reduce((obj, key) => 
      obj && obj[key] !== undefined ? obj[key] : undefined, 
      currentState
    );
  }, []);
  
  const subscribe = useCallback((path: string | string[], listener: Listener): () => void => {
    const pathStr = Array.isArray(path) ? path.join('.') : path;
    return listenersManager.current.addListener(pathStr, listener);
  }, []);
  
  const getPerformanceData = useCallback(() => {
    return {
      entries: performanceTracker.current.getEntries(),
      averages: {
        setState: performanceTracker.current.getAverageTime('setState'),
        mergeState: performanceTracker.current.getAverageTime('mergeState'),
        deleteState: performanceTracker.current.getAverageTime('deleteState')
      },
      clear: () => performanceTracker.current.clear()
    };
  }, []);
  
  const store = useMemo(() => ({
    state,
    setState,
    mergeState,
    deleteState,
    getState,
    subscribe,
    performance: getPerformanceData
  }), [state, setState, mergeState, deleteState, getState, subscribe, getPerformanceData]);
  
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

// Hook to use the store
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StateProvider');
  }
  return context;
};

// Helper hooks for common use cases
export const useStateValue = <T,>(path: string | string[]): [T, (value: T) => void] => {
  const { getState, setState, subscribe } = useStore();
  // Create a ref to store the latest path value to avoid stale closures
  const pathRef = useRef(path);
  const [value, setValue] = React.useState<T>(getState(path));
  
  // Update the ref when path changes
  useEffect(() => {
    pathRef.current = path;
  }, [path]);
  
  React.useEffect(() => {
    // Immediately synchronize with current state
    setValue(getState(path));
    
    const unsubscribe = subscribe(path, (newState) => {
      setValue(getState(pathRef.current));
    });
    
    return unsubscribe;
  }, [path, getState, subscribe]);
  
  // Use a stable callback that doesn't close over stale props/state
  const updateValue = useCallback((newValue: T) => {
    // Access path from ref to ensure we're using the latest value
    setState(pathRef.current, newValue);
    
    // Optimistically update local state for immediate feedback
    setValue(newValue);
  }, [setState]);
  
  return [value, updateValue];
};

// Hook to watch a specific part of state
export const useStateWatch = <T,>(path: string | string[]): T => {
  const { getState, subscribe } = useStore();
  // Create a ref to store the latest path value to avoid stale closures
  const pathRef = useRef(path);
  const [value, setValue] = React.useState<T>(getState(path));
  
  // Update the ref when path changes
  useEffect(() => {
    pathRef.current = path;
  }, [path]);
  
  React.useEffect(() => {
    // Immediately synchronize with current state
    setValue(getState(path));
    
    const unsubscribe = subscribe(path, () => {
      setValue(getState(pathRef.current));
    });
    
    return unsubscribe;
  }, [path, getState, subscribe]);
  
  return value;
};

// Hook for working with entire store
export const useEntireStore = () => {
  const { state, mergeState } = useStore();
  return [state, mergeState] as const;
};
