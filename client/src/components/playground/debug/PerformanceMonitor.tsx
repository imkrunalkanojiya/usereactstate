import React from 'react';
import { useStore } from '@/lib/ReactState';

const PerformanceMonitor: React.FC = () => {
  const { performance } = useStore();
  
  // In a real implementation, this would use the actual performance data
  const performanceData = performance ? performance() : {
    averages: {
      setState: 0.8,
      mergeState: 1.5,
      deleteState: 0.6
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="font-medium text-gray-900">Performance Monitor</h3>
        <p className="text-sm text-gray-500 mt-1">Track re-renders and state update efficiency</p>
      </div>
      
      <div className="p-4">
        <div className="border rounded-md p-4 bg-gray-50 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Re-renders by Component</span>
            <span className="text-xs text-gray-500">Last 2 minutes</span>
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>TodoList</span>
                <span className="font-medium">12 renders</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Header</span>
                <span className="font-medium">3 renders</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>SettingsPanel</span>
                <span className="font-medium">1 render</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '8%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4 bg-gray-50 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">State Update Timing</span>
            <span className="text-xs text-gray-500">Average execution time</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-24 text-xs">setState</div>
              <div className="flex-1 flex items-center">
                <div 
                  className="bg-green-500 h-4 rounded" 
                  style={{ width: `${(performanceData.averages.setState / 3) * 100}%` }}
                ></div>
                <span className="text-xs ml-2">{performanceData.averages.setState.toFixed(1)}ms</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-xs">mergeState</div>
              <div className="flex-1 flex items-center">
                <div 
                  className="bg-yellow-500 h-4 rounded" 
                  style={{ width: `${(performanceData.averages.mergeState / 3) * 100}%` }}
                ></div>
                <span className="text-xs ml-2">{performanceData.averages.mergeState.toFixed(1)}ms</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-xs">deleteState</div>
              <div className="flex-1 flex items-center">
                <div 
                  className="bg-green-500 h-4 rounded" 
                  style={{ width: `${(performanceData.averages.deleteState / 3) * 100}%` }}
                ></div>
                <span className="text-xs ml-2">{performanceData.averages.deleteState.toFixed(1)}ms</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4 bg-gray-50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Memory Usage</span>
            <button className="text-xs text-primary hover:text-blue-700">
              Run Garbage Collection
            </button>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex-1 bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '35%' }}></div>
            </div>
            <span className="text-xs font-medium">35%</span>
          </div>
          <div className="text-xs text-gray-500">
            State store size: 24KB / Memory allocated: 68KB
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
