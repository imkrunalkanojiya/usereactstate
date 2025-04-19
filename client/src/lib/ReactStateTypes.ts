// Type definitions for the React State library

// Basic state object type
export type State = {
  [key: string]: any;
};

// Action types
export const SET_STATE = 'SET_STATE';
export const MERGE_STATE = 'MERGE_STATE';
export const DELETE_STATE = 'DELETE_STATE';

// Action payloads
export type SetStatePayload = {
  path: string | string[];
  value: any;
};

// Actions
export type Action = {
  type: string;
  payload: any;
};

// Performance data structure
export type PerformanceData = {
  entries: {
    action: string;
    time: number;
    path?: string;
  }[];
  averages: {
    setState: number;
    mergeState: number;
    deleteState: number;
  };
  clear: () => void;
};

// Store context type
export type StoreContextType = {
  state: State;
  setState: (path: string | string[], value: any) => void;
  mergeState: (partialState: Partial<State>) => void;
  deleteState: (path: string | string[]) => void;
  getState: (path?: string | string[] | null) => any;
  subscribe: (path: string | string[], listener: (state: State) => void) => () => void;
  performance: () => PerformanceData;
};

// Props for the StateProvider component
export interface StateProviderProps {
  children: React.ReactNode;
  initialState?: State;
  debug?: boolean;
}

// Debug Log Entry
export interface LogEntry {
  id: string;
  action: string;
  timestamp: number;
  path?: string;
  value?: any;
  previousValue?: any;
}

// Action Log Props
export interface ActionLogProps {
  logs: LogEntry[];
  onClear: () => void;
}
