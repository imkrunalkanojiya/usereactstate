import React, { useState, useEffect, useRef } from 'react';
import { useStore } from './ReactState';
import { LogEntry } from './ReactStateTypes';
import { nanoid } from 'nanoid';

// Helper to format timestamps
const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
};

// Debug provider to capture and track state changes
export const StateDebugger: React.FC = () => {
  const { subscribe, getState } = useStore();
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const prevStateRef = useRef<{ [key: string]: any }>({});
  const maxLogs = 100; // Limit number of logs to prevent memory issues
  
  useEffect(() => {
    // Subscribe to the entire state tree
    const unsubscribe = subscribe('', (state) => {
      const prevState = prevStateRef.current;
      const currentState = getState();
      
      // Find differences between previous and current state
      Object.keys(currentState).forEach(key => {
        if (JSON.stringify(prevState[key]) !== JSON.stringify(currentState[key])) {
          // Create a log entry for this change
          const newLog: LogEntry = {
            id: nanoid(),
            action: 'STATE_CHANGE',
            timestamp: Date.now(),
            path: key,
            value: currentState[key],
            previousValue: prevState[key]
          };
          
          setLogs(currentLogs => {
            const updatedLogs = [newLog, ...currentLogs];
            // Keep only the most recent logs
            return updatedLogs.slice(0, maxLogs);
          });
        }
      });
      
      // Update the previous state reference
      prevStateRef.current = { ...currentState };
    });
    
    return unsubscribe;
  }, [subscribe, getState]);
  
  // We don't render anything, this is just for tracking
  return null;
};

// Component to display state logs
export const StateLogger: React.FC = () => {
  const { getState } = useStore();
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [filter, setFilter] = useState<string>('');
  
  // Expose logs clearing functionality
  const clearLogs = () => {
    setLogs([]);
  };
  
  // Component to export the current state as JSON
  const ExportStateButton: React.FC = () => {
    const handleExport = () => {
      const state = getState();
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "state_export.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    };
    
    return (
      <button 
        onClick={handleExport}
        className="text-xs text-gray-600 hover:text-gray-800"
      >
        Export State
      </button>
    );
  };
  
  // Filter logs based on path
  const filteredLogs = filter
    ? logs.filter(log => log.path && log.path.includes(filter))
    : logs;
    
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">Action Log</span>
        <div className="flex space-x-2">
          <ExportStateButton />
          <button 
            className="text-xs text-gray-600 hover:text-gray-800"
            onClick={clearLogs}
          >
            Clear
          </button>
        </div>
      </div>
      
      <div className="p-2">
        <input 
          type="text" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by path..."
          className="w-full p-1 text-xs border rounded mb-2"
        />
      </div>
      
      <div className="p-3 space-y-2" style={{ height: '170px', overflow: 'auto' }}>
        {filteredLogs.length === 0 ? (
          <div className="text-xs text-gray-500 text-center py-4">
            No state changes recorded yet
          </div>
        ) : (
          filteredLogs.map(log => (
            <div 
              key={log.id} 
              className={`text-xs p-2 rounded border ${
                log.action === 'SET_STATE' 
                  ? 'bg-green-50 text-green-700 border-green-100' 
                  : log.action === 'MERGE_STATE' 
                    ? 'bg-blue-50 text-blue-700 border-blue-100'
                    : 'bg-purple-50 text-purple-700 border-purple-100'
              }`}
            >
              <div className="font-semibold">{log.action}</div>
              {log.path && (
                <div className={`mt-1 ${
                  log.action === 'SET_STATE' 
                    ? 'text-green-600' 
                    : log.action === 'MERGE_STATE' 
                      ? 'text-blue-600'
                      : 'text-purple-600'
                }`}>
                  Path: {log.path}
                </div>
              )}
              {log.value !== undefined && (
                <div className={`${
                  log.action === 'SET_STATE' 
                    ? 'text-green-600' 
                    : log.action === 'MERGE_STATE' 
                      ? 'text-blue-600'
                      : 'text-purple-600'
                }`}>
                  Value: {typeof log.value === 'object' 
                    ? JSON.stringify(log.value).substring(0, 20) + '...' 
                    : String(log.value)
                  }
                </div>
              )}
              <div className="text-gray-500 text-right mt-1 text-[10px]">
                {formatTime(log.timestamp)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Debug panel component to display current state tree
export const StateInspector: React.FC = () => {
  const { getState } = useStore();
  const [currentState, setCurrentState] = useState<any>(getState());
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['']));
  
  useEffect(() => {
    // Subscribe to changes in the entire state tree
    const unsubscribe = subscribe('', () => {
      setCurrentState(getState());
    });
    
    return unsubscribe;
  }, [getState]);
  
  const toggleExpand = (path: string) => {
    const newExpanded = new Set(expanded);
    if (expanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpanded(newExpanded);
  };
  
  // Recursive function to render state tree
  const renderValue = (value: any, path: string = '') => {
    if (value === null) return <span className="text-gray-500">null</span>;
    
    if (value === undefined) return <span className="text-gray-500">undefined</span>;
    
    if (typeof value === 'object' && !Array.isArray(value)) {
      return (
        <div className="pl-4">
          <div 
            className="cursor-pointer hover:bg-gray-100 p-1 rounded flex items-center"
            onClick={() => toggleExpand(path)}
          >
            <span className="mr-1">{expanded.has(path) ? '▼' : '►'}</span>
            {path.split('.').pop() || 'root'}
          </div>
          
          {expanded.has(path) && (
            <div className="pl-4">
              {Object.entries(value).map(([key, val]) => (
                <div key={key} className="flex items-start">
                  <span className="text-blue-600 mr-1">{key}:</span>
                  {renderValue(val, path ? `${path}.${key}` : key)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    if (Array.isArray(value)) {
      return (
        <div className="pl-4">
          <div 
            className="cursor-pointer hover:bg-gray-100 p-1 rounded flex items-center"
            onClick={() => toggleExpand(path)}
          >
            <span className="mr-1">{expanded.has(path) ? '▼' : '►'}</span>
            {path.split('.').pop() || 'root'} [{value.length}]
          </div>
          
          {expanded.has(path) && (
            <div className="pl-4">
              {value.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-1">{idx}:</span>
                  {renderValue(item, path ? `${path}.${idx}` : `${idx}`)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    // Render primitive values
    if (typeof value === 'string') {
      return <span className="text-green-600">"{value}"</span>;
    }
    
    if (typeof value === 'number') {
      return <span className="text-amber-600">{value}</span>;
    }
    
    if (typeof value === 'boolean') {
      return <span className="text-purple-600">{value.toString()}</span>;
    }
    
    return <span>{String(value)}</span>;
  };
  
  // Subscribe to the entire state tree
  const { subscribe } = useStore();
  
  const handleRefresh = () => {
    setCurrentState({ ...getState() });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">Current State</span>
        <div className="flex items-center space-x-2">
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={handleRefresh}
          >
            <i className="ri-refresh-line text-sm"></i>
          </button>
        </div>
      </div>
      <div className="p-3 text-sm font-mono bg-gray-50 text-gray-800" style={{ height: '200px', overflow: 'auto' }}>
        {renderValue(currentState)}
      </div>
    </div>
  );
};
