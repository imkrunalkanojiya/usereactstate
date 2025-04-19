import React from 'react';

const FileBrowser: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">Project Files</span>
        <button className="text-gray-500 hover:text-gray-700">
          <svg 
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="currentColor"
          >
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </button>
      </div>
      <div className="p-2 text-sm">
        <div className="px-2 py-1.5 bg-blue-50 text-blue-800 rounded flex items-center justify-between">
          <div className="flex items-center">
            <svg 
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-2"
              fill="currentColor"
            >
              <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6.12,15.5L9.86,19.24L11.28,17.83L8.95,15.5L11.28,13.17L9.86,11.76L6.12,15.5M17.28,15.5L13.54,11.76L12.12,13.17L14.45,15.5L12.12,17.83L13.54,19.24L17.28,15.5Z" />
            </svg>
            <span>ReactState.js</span>
          </div>
          <div className="text-blue-600 text-xs">Active</div>
        </div>
        <div className="px-2 py-1.5 hover:bg-gray-50 rounded flex items-center">
          <svg 
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-2 text-gray-400"
            fill="currentColor"
          >
            <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6.12,15.5L9.86,19.24L11.28,17.83L8.95,15.5L11.28,13.17L9.86,11.76L6.12,15.5M17.28,15.5L13.54,11.76L12.12,13.17L14.45,15.5L12.12,17.83L13.54,19.24L17.28,15.5Z" />
          </svg>
          <span>useStateHooks.js</span>
        </div>
        <div className="px-2 py-1.5 hover:bg-gray-50 rounded flex items-center">
          <svg 
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-2 text-gray-400"
            fill="currentColor"
          >
            <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6.12,15.5L9.86,19.24L11.28,17.83L8.95,15.5L11.28,13.17L9.86,11.76L6.12,15.5M17.28,15.5L13.54,11.76L12.12,13.17L14.45,15.5L12.12,17.83L13.54,19.24L17.28,15.5Z" />
          </svg>
          <span>StoreProvider.js</span>
        </div>
        <div className="px-2 py-1.5 hover:bg-gray-50 rounded flex items-center">
          <svg 
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-2 text-yellow-500"
            fill="currentColor"
          >
            <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
          </svg>
          <span>examples</span>
        </div>
        <div className="px-2 py-1.5 hover:bg-gray-50 rounded flex items-center">
          <svg 
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-2 text-yellow-500"
            fill="currentColor"
          >
            <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
          </svg>
          <span>tests</span>
        </div>
      </div>
    </div>
  );
};

export default FileBrowser;
