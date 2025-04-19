import React from 'react';
import { LogEntry } from '@/lib/ReactStateTypes';
import { useStateValue } from '@/lib/ReactState';
import { nanoid } from 'nanoid';

interface ActionLogProps {
  logs: LogEntry[];
  onClear: () => void;
}

const ActionLog: React.FC<ActionLogProps> = ({ logs, onClear }) => {
  // Simulated logs for display
  const sampleLogs: LogEntry[] = [
    {
      id: nanoid(),
      action: 'SET_STATE',
      timestamp: Date.now() - 2000,
      path: 'user.preferences.theme',
      value: 'dark'
    },
    {
      id: nanoid(),
      action: 'MERGE_STATE',
      timestamp: Date.now() - 1000,
      value: { todos: [{ id: 1, text: 'New todo', done: false }] }
    },
    {
      id: nanoid(),
      action: 'SET_STATE',
      timestamp: Date.now(),
      path: 'ui.sidebar.collapsed',
      value: false
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">Action Log</span>
        <button 
          className="text-xs text-gray-600 hover:text-gray-800"
          onClick={onClear}
        >
          Clear
        </button>
      </div>
      <div className="p-3 space-y-2" style={{ height: '170px', overflow: 'auto' }}>
        {sampleLogs.map(log => (
          <div 
            key={log.id}
            className={`text-xs p-2 ${
              log.action === 'SET_STATE' 
              ? 'bg-green-50 text-green-700 rounded border border-green-100' 
              : log.action === 'MERGE_STATE' 
                ? 'bg-blue-50 text-blue-700 rounded border border-blue-100'
                : 'bg-purple-50 text-purple-700 rounded border border-purple-100'
            }`}
          >
            <div className="font-semibold">{log.action}</div>
            {log.path && (
              <div className={log.action === 'SET_STATE' ? 'text-green-600 mt-1' : 'text-blue-600 mt-1'}>
                Path: {log.path}
              </div>
            )}
            {log.value !== undefined && (
              <div className={log.action === 'SET_STATE' ? 'text-green-600' : 'text-blue-600'}>
                Value: {typeof log.value === 'object' 
                  ? JSON.stringify(log.value).substring(0, 30) + '...' 
                  : String(log.value)
                }
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionLog;
