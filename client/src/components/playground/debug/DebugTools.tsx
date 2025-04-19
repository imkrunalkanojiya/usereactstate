import React, { useState } from 'react';

const DebugTools: React.FC = () => {
  const [debugEnabled, setDebugEnabled] = useState(true);
  const [logLevel, setLogLevel] = useState('All');
  const [filterPath, setFilterPath] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="font-medium text-gray-900">Debug Tools</h3>
        <p className="text-sm text-gray-500 mt-1">Monitor and inspect state changes</p>
      </div>
      
      <div className="p-4">
        <div className="border rounded-md p-4 bg-gray-50 mb-4">
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Enable Debug Mode</label>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input 
                  type="checkbox" 
                  checked={debugEnabled} 
                  onChange={() => setDebugEnabled(!debugEnabled)}
                  id="debug-toggle" 
                  className="sr-only"
                />
                <div className={`block w-10 h-6 rounded-full ${debugEnabled ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${debugEnabled ? 'transform translate-x-4' : ''}`}></div>
              </div>
              <span className="text-sm text-green-600">{debugEnabled ? 'Enabled' : 'Disabled'}</span>
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Log Level</label>
              <select 
                className="w-full border-gray-300 rounded-md shadow-sm p-2 text-sm"
                value={logLevel}
                onChange={(e) => setLogLevel(e.target.value)}
              >
                <option>All</option>
                <option>Actions Only</option>
                <option>State Changes</option>
                <option>Errors Only</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Path</label>
            <input 
              type="text" 
              placeholder="e.g. user.settings" 
              className="w-full border-gray-300 rounded-md shadow-sm p-2 text-sm"
              value={filterPath}
              onChange={(e) => setFilterPath(e.target.value)}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm">
              Clear Logs
            </button>
            <button className="px-3 py-1.5 bg-primary hover:bg-blue-600 text-white rounded text-sm">
              Apply Settings
            </button>
          </div>
        </div>
        
        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex justify-between items-center">
            <span className="font-medium text-sm">Debug Console</span>
            <button className="text-xs text-gray-600 hover:text-gray-800">
              Export Logs
            </button>
          </div>
          <div className="bg-gray-900 text-green-300 p-3 font-mono text-xs" style={{ height: '250px', overflow: 'auto' }}>
            <div>[13:45:21] StateProvider initialized with initialState</div>
            <div>[13:45:21] ✓ Store created successfully</div>
            <div className="text-yellow-300">[13:45:24] Action dispatched: SET_STATE {`{ path: 'user.theme', value: 'dark' }`}</div>
            <div className="text-blue-300">[13:45:24] Component re-render: Header (user.theme changed)</div>
            <div className="text-yellow-300">[13:45:32] Action dispatched: MERGE_STATE {`{ todos: [...] }`}</div>
            <div className="text-blue-300">[13:45:32] Component re-render: TodoList (todos changed)</div>
            <div className="text-red-300">[13:45:36] Warning: Possible unnecessary re-render detected in TodoItem</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugTools;
