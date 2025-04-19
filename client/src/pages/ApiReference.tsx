import React from 'react';
import { Link } from 'wouter';

const ApiReference: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-flex items-center">
            <svg 
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              fill="currentColor"
            >
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">API Reference</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Complete API documentation for ReactState library components, hooks, and utilities.
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-6">
              <h3 className="font-medium text-gray-900 mb-3">API Reference</h3>
              <nav className="space-y-1 text-sm">
                <a href="#components" className="block py-1.5 text-primary font-medium">Components</a>
                <a href="#hooks" className="block py-1.5 text-gray-700 hover:text-primary">Hooks</a>
                <a href="#actions" className="block py-1.5 text-gray-700 hover:text-primary">Actions</a>
                <a href="#types" className="block py-1.5 text-gray-700 hover:text-primary">TypeScript Types</a>
                <a href="#utilities" className="block py-1.5 text-gray-700 hover:text-primary">Utilities</a>
                <a href="#constants" className="block py-1.5 text-gray-700 hover:text-primary">Constants</a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            
              {/* Components Section */}
              <section id="components" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Components</h2>
                
                {/* StateProvider */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="mr-2 p-1 rounded bg-blue-100 text-blue-800">
                      <svg 
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="currentColor"
                      >
                        <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M12,14L13.5,17H10.5L12,14Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">StateProvider</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    The core component that creates the state context and provides the store to child components.
                  </p>
                  
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Props</h4>
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left font-medium text-gray-500 pr-4 py-2">Name</th>
                          <th className="text-left font-medium text-gray-500 pr-4 py-2">Type</th>
                          <th className="text-left font-medium text-gray-500 pr-4 py-2">Default</th>
                          <th className="text-left font-medium text-gray-500 py-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pr-4 py-2 align-top font-medium">initialState</td>
                          <td className="pr-4 py-2 align-top text-gray-600">object</td>
                          <td className="pr-4 py-2 align-top text-gray-600">{"{}"}</td>
                          <td className="py-2 align-top text-gray-600">The initial state object for the store</td>
                        </tr>
                        <tr>
                          <td className="pr-4 py-2 align-top font-medium">debug</td>
                          <td className="pr-4 py-2 align-top text-gray-600">boolean</td>
                          <td className="pr-4 py-2 align-top text-gray-600">false</td>
                          <td className="py-2 align-top text-gray-600">When true, logs all state changes to the console</td>
                        </tr>
                        <tr>
                          <td className="pr-4 py-2 align-top font-medium">children</td>
                          <td className="pr-4 py-2 align-top text-gray-600">ReactNode</td>
                          <td className="pr-4 py-2 align-top text-gray-600">-</td>
                          <td className="py-2 align-top text-gray-600">React children that will have access to the store</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`import { StateProvider } from 'react-state-lib';

// Basic usage
<StateProvider>
  <App />
</StateProvider>

// With initial state
const initialState = {
  user: { name: 'John', theme: 'dark' },
  todos: []
};

<StateProvider initialState={initialState} debug={true}>
  <App />
</StateProvider>`}</pre>
                  </div>
                </div>
                
                {/* StateDebugger */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="mr-2 p-1 rounded bg-purple-100 text-purple-800">
                      <svg 
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="currentColor"
                      >
                        <path d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">StateDebugger</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    A developer tool component that displays the current state and tracks state changes.
                  </p>
                  
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Props</h4>
                    <p className="text-gray-600">This component does not accept any props.</p>
                  </div>
                  
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`import { StateDebugger } from 'react-state-lib';

// Include in your app (typically only in development)
function App() {
  return (
    <>
      {process.env.NODE_ENV === 'development' && <StateDebugger />}
      <YourComponents />
    </>
  );
}`}</pre>
                  </div>
                </div>
              </section>
              
              {/* Hooks Section */}
              <section id="hooks" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hooks</h2>
                
                {/* useStore */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="mr-2 p-1 rounded bg-green-100 text-green-800">
                      <svg 
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="currentColor"
                      >
                        <path d="M12,18.54L19.81,12.96L21,11.97V9.03L12,3L3,9.03V11.97L12,18.54M5.03,10L12,5.5L18.97,10L12,14.5L5.03,10M4,14H20V15H4V14M4,17H20V18H4V17M6,20H18V21H6V20Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">useStore</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    The primary hook for accessing the store and its functions.
                  </p>
                  
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Returns</h4>
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left font-medium text-gray-500 pr-4 py-2">Name</th>
                          <th className="text-left font-medium text-gray-500 pr-4 py-2">Type</th>
                          <th className="text-left font-medium text-gray-500 py-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pr-4 py-2 align-top font-medium">state</td>
                          <td className="pr-4 py-2 align-top text-gray-600">object</td>
                          <td className="py-2 align-top text-gray-600">The complete current state object</td>
                        </tr>
                        <tr>
                          <td className="pr-4 py-2 align-top font-medium">getState</td>
                          <td className="pr-4 py-2 align-top text-gray-600">{`(path?: string | string[]) => any`}</td>
                          <td className="py-2 align-top text-gray-600">Retrieves a value from state at the specified path</td>
                        </tr>
                        <tr>
                          <td className="pr-4 py-2 align-top font-medium">setState</td>
                          <td className="pr-4 py-2 align-top text-gray-600">{`(path: string | string[], value: any) => void`}</td>
                          <td className="py-2 align-top text-gray-600">Sets a value in state at the specified path</td>
                        </tr>
                        <tr>
                          <td className="pr-4 py-2 align-top font-medium">mergeState</td>
                          <td className="pr-4 py-2 align-top text-gray-600">{`(partialState: object) => void`}</td>
                          <td className="py-2 align-top text-gray-600">Merges an object with the root state (shallow merge)</td>
                        </tr>
                        <tr>
                          <td className="pr-4 py-2 align-top font-medium">deleteState</td>
                          <td className="pr-4 py-2 align-top text-gray-600">{`(path: string | string[]) => void`}</td>
                          <td className="py-2 align-top text-gray-600">Removes a value from state at the specified path</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`import { useStore } from 'react-state-lib';

function Component() {
  const { state, getState, setState, mergeState, deleteState } = useStore();
  
  // Access entire state object
  console.log(state);
  
  // Get a value using dot notation
  const userName = getState('user.name');
  
  // Get a value using array notation
  const theme = getState(['user', 'preferences', 'theme']);
  
  // Set a value
  setState('user.name', 'Jane Doe');
  
  // Merge values at the root level
  mergeState({ newFeature: { enabled: true } });
  
  // Delete a value
  deleteState('temporaryData');
  
  return (
    // Your component JSX
  );
}`}</pre>
                  </div>
                </div>
                
                {/* useStateValue */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="mr-2 p-1 rounded bg-green-100 text-green-800">
                      <svg 
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="currentColor"
                      >
                        <path d="M21.5,9.5L20.19,8.19L18,10.38L15.81,8.19L14.5,9.5L16.69,11.69L14.5,13.88L15.81,15.19L18,13L20.19,15.19L21.5,13.88L19.31,11.69L21.5,9.5M16,2V4H8V2H16M8,22H16V20H8V22M16,18H14.5V13.88H18V16H16V18M6,18V16H8V13.88L3.71,9.59C3.26,9.14 3,8.5 3,7.81C3,6.47 4.08,5.37 5.43,5.37C6.33,5.37 7.14,5.83 7.57,6.56L8,7.31L8.43,6.56C8.86,5.83 9.67,5.37 10.57,5.37C11.92,5.37 13,6.47 13,7.81C13,8.5 12.74,9.14 12.29,9.59L8,13.88V16H10V18H6Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">useStateValue</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    A hook that provides a value-setter pair similar to React's useState, but for global state.
                  </p>
                  
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Parameters</h4>
                    <table className="min-w-full text-sm mb-4">
                      <thead>
                        <tr>
                          <th className="text-left font-medium text-gray-500 pr-4 py-2">Name</th>
                          <th className="text-left font-medium text-gray-500 pr-4 py-2">Type</th>
                          <th className="text-left font-medium text-gray-500 py-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pr-4 py-2 align-top font-medium">path</td>
                          <td className="pr-4 py-2 align-top text-gray-600">string | string[]</td>
                          <td className="py-2 align-top text-gray-600">Path to the value in state</td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Returns</h4>
                    <p className="text-gray-600">
                      [value, setValue] - A tuple with the current value and a setter function
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`import { useStateValue } from 'react-state-lib';

function ThemeToggle() {
  const [theme, setTheme] = useStateValue('user.preferences.theme');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

// With TypeScript
const [count, setCount] = useStateValue<number>('counter');`}</pre>
                  </div>
                </div>
              </section>
              
              {/* Actions Section */}
              <section id="actions" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Actions</h2>
                
                <p className="text-gray-600 mb-6">
                  These are the core actions that can be dispatched to update state. They are typically used internally by the hooks but can be useful for understanding the library's operation.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">SET_STATE</h4>
                    <p className="text-gray-600 mb-2">
                      Updates a specific value at a path in the state tree.
                    </p>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">Payload:</p>
                      <pre className="bg-gray-200 p-2 rounded mt-1">{`{
  path: string | string[],
  value: any
}`}</pre>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">MERGE_STATE</h4>
                    <p className="text-gray-600 mb-2">
                      Merges an object with the root state (shallow merge).
                    </p>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">Payload:</p>
                      <pre className="bg-gray-200 p-2 rounded mt-1">{`{
  ...partialState
}`}</pre>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">DELETE_STATE</h4>
                    <p className="text-gray-600 mb-2">
                      Removes a value at a specific path in the state tree.
                    </p>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">Payload:</p>
                      <pre className="bg-gray-200 p-2 rounded mt-1">{`string | string[] // Path to delete`}</pre>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* TypeScript Types Section */}
              <section id="types" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">TypeScript Types</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">State</h4>
                    <p className="text-gray-600 mb-2">
                      Represents the structure of the state object.
                    </p>
                    <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-auto">
                      <pre>{`export type State = {
  [key: string]: any;
};`}</pre>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Action</h4>
                    <p className="text-gray-600 mb-2">
                      Represents a state update action with a type and payload.
                    </p>
                    <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-auto">
                      <pre>{`export type Action = {
  type: string;
  payload: any;
};`}</pre>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">StoreContextType</h4>
                    <p className="text-gray-600 mb-2">
                      The type of the context value provided by StateProvider.
                    </p>
                    <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-auto">
                      <pre>{`export type StoreContextType = {
  state: State;
  setState: (path: string | string[], value: any) => void;
  mergeState: (partialState: Partial<State>) => void;
  deleteState: (path: string | string[]) => void;
  getState: (path?: string | string[] | null) => any;
  subscribe: (path: string | string[], listener: (state: State) => void) => () => void;
  performance: () => PerformanceData;
};`}</pre>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">StateProviderProps</h4>
                    <p className="text-gray-600 mb-2">
                      The props accepted by the StateProvider component.
                    </p>
                    <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-auto">
                      <pre>{`export interface StateProviderProps {
  children: React.ReactNode;
  initialState?: State;
  debug?: boolean;
}`}</pre>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Utilities Section */}
              <section id="utilities" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Utilities</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">logger</h3>
                    <p className="text-gray-600 mb-4">
                      A utility function that logs state changes to the console when debug mode is enabled.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                      <pre>{`// Internal function
export const logger = (enabled: boolean) => {
  if (!enabled) return () => {};
  return (action: Action, prevState: State, nextState: State) => {
    console.group(\`%cAction: \${action.type}\`, 'color: #8B5CF6; font-weight: bold');
    console.log('%cPrevious State:', 'color: #EF4444', prevState);
    console.log('%cPayload:', 'color: #F59E0B', action.payload);
    console.log('%cNew State:', 'color: #10B981', nextState);
    console.groupEnd();
  };
};`}</pre>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Constants Section */}
              <section id="constants" className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Constants</h2>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Action Types</h4>
                  <p className="text-gray-600 mb-2">
                    Constants representing the available action types:
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`export const SET_STATE = 'SET_STATE';
export const MERGE_STATE = 'MERGE_STATE';
export const DELETE_STATE = 'DELETE_STATE';`}</pre>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiReference;