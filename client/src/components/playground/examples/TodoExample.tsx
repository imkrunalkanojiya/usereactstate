import React, { useState } from 'react';
import { useStateValue } from '@imkrunalkanojiya/usereactstate';

const TodoExample: React.FC = () => {
  const [todos, setTodos] = useStateValue<Array<{ id: number, text: string, done: boolean }>>('todos');
  const [newTask, setNewTask] = useState('');

  const addTodo = () => {
    if (newTask.trim()) {
      const newTodos = [
        ...todos,
        { id: Date.now(), text: newTask, done: false }
      ];
      setTodos(newTodos);
      setNewTask('');
    }
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="font-medium text-gray-900">Todo List Example</h3>
        <p className="text-sm text-gray-500 mt-1">Todo app with global state management</p>
      </div>
      
      <div className="p-4">
        {/* Todo Example Preview */}
        <div className="border rounded-md p-4 mb-4 bg-gray-50">
          <div className="mb-3 flex">
            <input 
              type="text" 
              placeholder="Add a new task..." 
              className="flex-1 px-3 py-2 border rounded-l-md"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="px-4 py-2 bg-primary text-white rounded-r-md"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {todos.map(todo => (
              <li key={todo.id} className="flex items-center justify-between p-2 bg-white border rounded">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span className={todo.done ? 'line-through text-gray-500' : ''}>
                    {todo.text}
                  </span>
                </div>
                <button 
                  className="text-red-500 hover:text-red-700"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <svg 
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                  >
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                  </svg>
                </button>
              </li>
            ))}
            {todos.length === 0 && (
              <li className="p-4 text-center text-gray-500">
                No tasks yet. Add one above!
              </li>
            )}
          </ul>
        </div>
        
        {/* Example Code */}
        <div className="text-sm font-mono bg-gray-900 text-white p-3 rounded overflow-auto" style={{ maxHeight: '300px' }}>
          <pre>
{`import React, { useState } from 'react';
import { StateProvider, useStore } from '@imkrunalkanojiya/usereactstate';

const TodoItem = ({ todo }) => {
  const { setState, getState } = useStore();
  const todos = getState('todos');
  
  const toggleTodo = () => {
    const updatedTodos = todos.map(t => 
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setState('todos', updatedTodos);
  };
  
  const deleteTodo = () => {
    const updatedTodos = todos.filter(t => t.id !== todo.id);
    setState('todos', updatedTodos);
  };
  
  return (
    <li className="flex items-center justify-between p-2 bg-white border rounded">
      <div className="flex items-center">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={toggleTodo} 
          className="mr-2" 
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
      </div>
      <button onClick={deleteTodo} className="text-red-500 hover:text-red-700">
        <i className="ri-delete-bin-line"></i>
      </button>
    </li>
  );
};`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TodoExample;
