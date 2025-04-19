import React, { useState } from 'react';
import { Link } from 'wouter';
import { useStateValue, useStore } from '@/lib/ReactState';

// Basic Example - Counter
const CounterExample: React.FC = () => {
  const [count, setCount] = useStateValue<number>('examples.counter');
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="font-medium text-gray-900">Counter Example</h3>
        <p className="text-sm text-gray-500 mt-1">Simple counter using global state</p>
      </div>
      <div className="p-6 text-center">
        <div className="text-5xl font-bold mb-6">{count || 0}</div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setCount((count || 0) - 1)}
            className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 font-medium rounded-md transition"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount((count || 0) + 1)}
            className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-600 font-medium rounded-md transition"
          >
            Increment
          </button>
        </div>
      </div>
      
      <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
        <h4 className="font-medium text-sm text-gray-900 mb-2">Code</h4>
        <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-xs overflow-auto" style={{ maxHeight: '200px' }}>
          <pre>{`import React from 'react';
import { useStateValue } from 'react-state-lib';

function Counter() {
  const [count, setCount] = useStateValue('counter');
  
  return (
    <div className="text-center">
      <div className="text-5xl font-bold mb-6">{count || 0}</div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-100 text-red-600 rounded-md"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-100 text-green-600 rounded-md"
        >
          Increment
        </button>
      </div>
    </div>
  );
}`}</pre>
        </div>
      </div>
    </div>
  );
};

// Todo List Example
const TodoExample: React.FC = () => {
  const [todos, setTodos] = useStateValue<Array<{ id: number, text: string, completed: boolean }>>('examples.todos');
  const [newTodo, setNewTodo] = useState('');
  
  const addTodo = () => {
    if (newTodo.trim()) {
      const todosList = Array.isArray(todos) ? todos : [];
      setTodos([
        ...todosList,
        { id: Date.now(), text: newTodo, completed: false }
      ]);
      setNewTodo('');
    }
  };
  
  const toggleTodo = (id: number) => {
    if (!Array.isArray(todos)) return;
    
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  
  const deleteTodo = (id: number) => {
    if (!Array.isArray(todos)) return;
    
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };
  
  const todosList = Array.isArray(todos) ? todos : [];
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="font-medium text-gray-900">Todo List Example</h3>
        <p className="text-sm text-gray-500 mt-1">Todo application with global state management</p>
      </div>
      <div className="p-6">
        <div className="mb-4 flex">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        
        <div className="space-y-2 max-h-64 overflow-auto mb-4">
          {todosList.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No tasks yet. Add one above!
            </div>
          ) : (
            todosList.map(todo => (
              <div key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3 h-5 w-5 text-primary"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 transition"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <svg 
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      
      <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
        <h4 className="font-medium text-sm text-gray-900 mb-2">Code</h4>
        <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-xs overflow-auto" style={{ maxHeight: '200px' }}>
          <pre>{`import React, { useState } from 'react';
import { useStateValue } from 'react-state-lib';

function TodoList() {
  const [todos, setTodos] = useStateValue('todos');
  const [newTodo, setNewTodo] = useState('');
  
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, completed: false }
      ]);
      setNewTodo('');
    }
  };
  
  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
  
  return (
    <div>
      <div className="mb-4 flex">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <div className="space-y-2">
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? 'line-through' : ''}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`}</pre>
        </div>
      </div>
    </div>
  );
};

// Theme Switcher Example
const ThemeExample: React.FC = () => {
  const [theme, setTheme] = useStateValue<'light' | 'dark'>('examples.theme');
  const { state } = useStore();
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="font-medium text-gray-900">Theme Switcher Example</h3>
        <p className="text-sm text-gray-500 mt-1">Toggle between light and dark themes using global state</p>
      </div>
      <div className="p-6">
        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} mb-4 transition-colors duration-200`}>
          <h4 className="text-lg font-medium mb-2">Current Theme: {theme || 'light'}</h4>
          <p>This content changes based on the selected theme.</p>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`px-4 py-2 rounded-md transition ${
              theme === 'dark' 
                ? 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300' 
                : 'bg-blue-200 text-blue-800 hover:bg-blue-300'
            }`}
          >
            {theme === 'dark' ? (
              <span className="flex items-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                >
                  <path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  <path d="M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" />
                </svg>
                Switch to Light Mode
              </span>
            ) : (
              <span className="flex items-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                >
                  <path d="M12,3A9,9 0 0,1 21,12A9,9 0 0,1 12,21A9,9 0 0,1 3,12A9,9 0 0,1 12,3M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z" />
                </svg>
                Switch to Dark Mode
              </span>
            )}
          </button>
        </div>
      </div>
      
      <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
        <h4 className="font-medium text-sm text-gray-900 mb-2">Current State</h4>
        <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-xs overflow-auto" style={{ maxHeight: '200px' }}>
          <pre>
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

const Examples: React.FC = () => {
  // Initialize examples state if not already set
  const { getState, setState } = useStore();
  const examplesState = getState('examples');
  
  if (!examplesState) {
    setState('examples', {
      counter: 0,
      todos: [
        { id: 1, text: 'Learn ReactState library', completed: false },
        { id: 2, text: 'Build an application', completed: false },
        { id: 3, text: 'Share with others', completed: false }
      ],
      theme: 'light'
    });
  }

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
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Examples</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Practical examples demonstrating how to use ReactState in real-world scenarios.
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CounterExample />
          <TodoExample />
          <div className="lg:col-span-2">
            <ThemeExample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;