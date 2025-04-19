import React from 'react';

const CodeEditor: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700">ReactState.js</span>
          <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Core Library</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
            <svg 
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
            >
              <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg 
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
            >
              <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Code Editor */}
      <div className="p-4 bg-gray-900 text-white font-mono text-sm overflow-auto" style={{ height: '550px' }}>
        <pre className="whitespace-pre">
{`import React, { createContext, useContext, useReducer, useCallback, useMemo } from 'react';

// Create a context for our store
const StoreContext = createContext();

// Action types
const SET_STATE = 'SET_STATE';
const MERGE_STATE = 'MERGE_STATE';
const DELETE_STATE = 'DELETE_STATE';

// Helper for debugging
const logger = enabled => {
  if (!enabled) return () => {};
  return (action, prevState, nextState) => {
    console.group(\`%cAction: \${action.type}\`, 'color: #8B5CF6; font-weight: bold');
    console.log('%cPrevious State:', 'color: #EF4444', prevState);
    console.log('%cPayload:', 'color: #F59E0B', action.payload);
    console.log('%cNew State:', 'color: #10B981', nextState);
    console.groupEnd();
  };
};

// Main reducer for state
const reducer = (state, action) => {
  switch (action.type) {
    case SET_STATE: {
      const { path, value } = action.payload;
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
      const path = action.payload;
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

// State provider component
export const StateProvider = ({ children, initialState = {}, debug = false }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const log = useMemo(() => logger(debug), [debug]);
  
  const setState = useCallback((path, value) => {
    const action = { type: SET_STATE, payload: { path, value } };
    log(action, state, reducer(state, action));
    dispatch(action);
  }, [state, log]);
  
  const mergeState = useCallback((partialState) => {
    const action = { type: MERGE_STATE, payload: partialState };
    log(action, state, reducer(state, action));
    dispatch(action);
  }, [state, log]);
  
  const deleteState = useCallback((path) => {
    const action = { type: DELETE_STATE, payload: path };
    log(action, state, reducer(state, action));
    dispatch(action);
  }, [state, log]);
  
  const getState = useCallback((path = null) => {
    if (!path) return state;
    const keys = Array.isArray(path) ? path : path.split('.');
    return keys.reduce((obj, key) => 
      obj && obj[key] !== undefined ? obj[key] : undefined, state);
  }, [state]);
  
  const store = useMemo(() => ({
    state,
    setState,
    mergeState,
    deleteState,
    getState
  }), [state, setState, mergeState, deleteState, getState]);
  
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
export const useStateValue = (path) => {
  const { getState, setState } = useStore();
  const value = getState(path);
  const setValue = useCallback((newValue) => setState(path, newValue), [setState, path]);
  return [value, setValue];
};`}
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
