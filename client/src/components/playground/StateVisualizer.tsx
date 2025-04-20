import React from 'react';
import { useStore } from '@imkrunalkanojiya/usereactstate';

const StateVisualizer: React.FC = () => {
  const { getState } = useStore();
  const state = getState();
  
  const downloadState = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "state.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">Current State</span>
        <div className="flex items-center space-x-2">
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => window.location.reload()}
          >
            <svg 
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
            >
              <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" />
            </svg>
          </button>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={downloadState}
          >
            <svg 
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
            >
              <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-3 text-sm font-mono bg-gray-50 text-gray-800" style={{ height: '200px', overflow: 'auto' }}>
        <pre>
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default StateVisualizer;
