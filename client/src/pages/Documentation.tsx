import React from 'react';
import { Link } from 'wouter';

const Documentation: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Documentation</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Comprehensive guide to using ReactState for state management in your React applications.
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-6">
              <h3 className="font-medium text-gray-900 mb-3">Contents</h3>
              <nav className="space-y-1 text-sm">
                <a href="#introduction" className="block py-1.5 text-primary font-medium">Introduction</a>
                <a href="#installation" className="block py-1.5 text-gray-700 hover:text-primary">Installation</a>
                <a href="#basic-usage" className="block py-1.5 text-gray-700 hover:text-primary">Basic Usage</a>
                <a href="#state-provider" className="block py-1.5 text-gray-700 hover:text-primary">StateProvider</a>
                <a href="#hooks" className="block py-1.5 text-gray-700 hover:text-primary">Hooks</a>
                <a href="#state-update" className="block py-1.5 text-gray-700 hover:text-primary">State Updates</a>
                <a href="#debugging" className="block py-1.5 text-gray-700 hover:text-primary">Debugging</a>
                <a href="#advanced" className="block py-1.5 text-gray-700 hover:text-primary">Advanced Usage</a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 mb-4">
                  ReactState is a lightweight state management library designed specifically for React applications. It provides a simple and intuitive API for managing global state without complex configurations or boilerplate code.
                </p>
                <p className="text-gray-600 mb-4">
                  The primary goal of ReactState is to make state management as seamless as possible while maintaining excellent performance through targeted re-renders and providing powerful debugging capabilities.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mt-4">
                  <p className="text-sm text-blue-700">
                    <strong>Key Features:</strong>
                  </p>
                  <ul className="text-sm text-blue-700 mt-2 list-disc list-inside pl-2">
                    <li>Simple API with minimal boilerplate</li>
                    <li>Path-based state access and updates</li>
                    <li>Performance optimized with selective re-renders</li>
                    <li>Built-in debugging tools</li>
                    <li>TypeScript support</li>
                  </ul>
                </div>
              </section>
              
              {/* Installation */}
              <section id="installation" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
                <p className="text-gray-600 mb-4">
                  Install ReactState using npm or yarn:
                </p>
                <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm mb-4">
                  $ npm install react-state-lib
                </div>
                <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm">
                  $ yarn add react-state-lib
                </div>
              </section>
              
              {/* Basic Usage */}
              <section id="basic-usage" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
                <p className="text-gray-600 mb-4">
                  Get started with ReactState in just three simple steps:
                </p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Wrap your application with StateProvider</h3>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`import React from 'react';
import { StateProvider } from 'react-state-lib';
import App from './App';

const initialState = {
  user: {
    name: 'John Doe',
    theme: 'light'
  },
  todos: []
};

ReactDOM.render(
  <StateProvider initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);`}</pre>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">2. Access state with useStore hook</h3>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`import React from 'react';
import { useStore } from 'react-state-lib';

function UserProfile() {
  const { getState, setState } = useStore();
  const userName = getState('user.name');
  
  return (
    <div>
      <h2>Welcome, {userName}!</h2>
      <button
        onClick={() => setState('user.name', 'Jane Doe')}
      >
        Change Name
      </button>
    </div>
  );
}`}</pre>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">3. Use the convenience hooks for common operations</h3>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`import React from 'react';
import { useStateValue } from 'react-state-lib';

function ThemeToggle() {
  const [theme, setTheme] = useStateValue('user.theme');
  
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}`}</pre>
                  </div>
                </div>
              </section>
              
              {/* StateProvider */}
              <section id="state-provider" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">StateProvider</h2>
                <p className="text-gray-600 mb-4">
                  The StateProvider component is responsible for creating and managing the state store throughout your application.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Props</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-sm">
                      <tr>
                        <td className="px-4 py-3 font-medium">initialState</td>
                        <td className="px-4 py-3 text-gray-600">object</td>
                        <td className="px-4 py-3 text-gray-600">{"{}"}</td>
                        <td className="px-4 py-3 text-gray-600">The initial state for your application</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">debug</td>
                        <td className="px-4 py-3 text-gray-600">boolean</td>
                        <td className="px-4 py-3 text-gray-600">false</td>
                        <td className="px-4 py-3 text-gray-600">Enable debug mode for logging state changes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">children</td>
                        <td className="px-4 py-3 text-gray-600">ReactNode</td>
                        <td className="px-4 py-3 text-gray-600">-</td>
                        <td className="px-4 py-3 text-gray-600">Child components</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              
              {/* Continue with other sections */}
              {/* Hooks Section */}
              <section id="hooks" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hooks</h2>
                <p className="text-gray-600 mb-4">
                  ReactState provides several hooks for accessing and manipulating state:
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">useStore()</h3>
                  <p className="text-gray-600 mb-2">
                    The primary hook that provides access to the complete store API.
                  </p>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`const { 
  state,        // Complete state object
  getState,     // Get a value from state by path
  setState,     // Set a value in state by path
  mergeState,   // Merge an object into state
  deleteState,  // Delete a value from state by path
} = useStore();`}</pre>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">useStateValue(path)</h3>
                  <p className="text-gray-600 mb-2">
                    A convenience hook similar to React's useState but for accessing global state.
                  </p>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`const [value, setValue] = useStateValue(path);

// Example
const [userName, setUserName] = useStateValue('user.name');
console.log(userName); // 'John Doe'
setUserName('Jane Doe'); // Updates user.name in global state`}</pre>
                  </div>
                </div>
              </section>
              
              {/* State Updates Section */}
              <section id="state-update" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">State Updates</h2>
                <p className="text-gray-600 mb-4">
                  ReactState provides multiple ways to update state:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">setState(path, value)</h3>
                    <p className="text-gray-600 mb-2">
                      Updates a specific path in the state tree.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                      <pre>{`// Update a single value
setState('user.name', 'Jane Doe');

// Update an array
setState('todos', [...todos, newTodo]);

// Update a nested value
setState('settings.theme.mode', 'dark');`}</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">mergeState(partialState)</h3>
                    <p className="text-gray-600 mb-2">
                      Merges an object with the existing state (shallow merge at root level).
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                      <pre>{`// Merge multiple values
mergeState({
  'user': { ...user, lastLogin: Date.now() },
  'app': { ...app, version: '1.2.0' }
});`}</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">deleteState(path)</h3>
                    <p className="text-gray-600 mb-2">
                      Removes a value from the state tree.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                      <pre>{`// Delete a specific property
deleteState('user.temporaryData');

// Remove an item from a collection
const newTodos = todos.filter(todo => todo.id !== id);
setState('todos', newTodos);`}</pre>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Debugging Section */}
              <section id="debugging" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Debugging</h2>
                <p className="text-gray-600 mb-4">
                  ReactState includes built-in debugging capabilities to help track state changes and diagnose issues:
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Enable Debug Mode</h3>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`<StateProvider initialState={initialState} debug={true}>
  <App />
</StateProvider>`}</pre>
                  </div>
                  <p className="text-gray-600 mt-2">
                    When debug mode is enabled, ReactState will log all state changes to the console with:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Action type (SET_STATE, MERGE_STATE, DELETE_STATE)</li>
                    <li>Previous state</li>
                    <li>Action payload</li>
                    <li>New state</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">StateDebugger Component</h3>
                  <p className="text-gray-600 mb-2">
                    For visual debugging, include the StateDebugger component in your app:
                  </p>
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                    <pre>{`import { StateDebugger } from 'react-state-lib';

function App() {
  return (
    <div>
      {process.env.NODE_ENV === 'development' && <StateDebugger />}
      <YourComponents />
    </div>
  );
}`}</pre>
                  </div>
                  <p className="text-gray-600 mt-2">
                    The StateDebugger provides a visual interface for:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Viewing the current state</li>
                    <li>Tracking state changes</li>
                    <li>Monitoring performance metrics</li>
                    <li>Exporting state for analysis</li>
                  </ul>
                </div>
              </section>
              
              {/* Advanced Usage Section */}
              <section id="advanced" className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Usage</h2>
                <p className="text-gray-600 mb-4">
                  Explore advanced patterns and techniques for using ReactState effectively:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Custom Selectors</h3>
                    <p className="text-gray-600 mb-2">
                      Create custom selectors to derive data from your state:
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                      <pre>{`function useCompletedTodos() {
  const { getState } = useStore();
  const todos = getState('todos') || [];
  
  return todos.filter(todo => todo.completed);
}`}</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Using with TypeScript</h3>
                    <p className="text-gray-600 mb-2">
                      ReactState includes TypeScript definitions for type safety:
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto">
                      <pre>{`// Define your state types
interface AppState {
  user: {
    name: string;
    preferences: {
      theme: 'light' | 'dark';
    }
  };
  todos: Array<{
    id: number;
    text: string;
    completed: boolean;
  }>;
}

// Use with typed hooks
const [theme, setTheme] = useStateValue<'light' | 'dark'>('user.preferences.theme');
const { getState } = useStore<AppState>();`}</pre>
                    </div>
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

export default Documentation;