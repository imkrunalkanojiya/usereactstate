import React from 'react';
import CodeEditor from './CodeEditor';
import FileBrowser from './FileBrowser';
import StateVisualizer from './StateVisualizer';
import ActionLog from './ActionLog';
import TestSuite from './testing/TestSuite';
import CounterExample from './examples/CounterExample';
import TodoExample from './examples/TodoExample';
import DebugTools from './debug/DebugTools';
import PerformanceMonitor from './debug/PerformanceMonitor';
import { useStore } from '@/lib/ReactState';

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const { getState } = useStore();
  
  // Implementation Tab Content
  const ImplementationContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Source Code Editor */}
      <div className="lg:col-span-2">
        <CodeEditor />
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <FileBrowser />
        <StateVisualizer />
        <ActionLog 
          logs={[]}
          onClear={() => {}}
        />
      </div>
    </div>
  );

  // Testing Tab Content
  const TestingContent = () => (
    <TestSuite />
  );

  // Examples Tab Content
  const ExamplesContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CounterExample />
      <TodoExample />
    </div>
  );

  // Debugging Tab Content
  const DebuggingContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <DebugTools />
      <PerformanceMonitor />
    </div>
  );

  return (
    <div className="tab-content">
      {activeTab === 'implementation' && <ImplementationContent />}
      {activeTab === 'testing' && <TestingContent />}
      {activeTab === 'examples' && <ExamplesContent />}
      {activeTab === 'debugging' && <DebuggingContent />}
    </div>
  );
};

export default TabContent;
