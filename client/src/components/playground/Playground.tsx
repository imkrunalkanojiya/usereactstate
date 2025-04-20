import React from 'react';
import { useStateValue } from '@imkrunalkanojiya/usereactstate';
import TabContent from './TabContent';

const Playground: React.FC = () => {
  const [activeTab, setActiveTab] = useStateValue<string>('activeTab');

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Library Development Playground</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="border border-gray-200 rounded-lg flex overflow-hidden bg-white shadow-sm">
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'implementation' ? 'text-white bg-primary' : 'text-gray-700 hover:bg-gray-50'}`} 
              onClick={() => setActiveTab('implementation')}
            >
              Implementation
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'testing' ? 'text-white bg-primary' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('testing')}
            >
              Testing
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'examples' ? 'text-white bg-primary' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('examples')}
            >
              Examples
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'debugging' ? 'text-white bg-primary' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('debugging')}
            >
              Debugging
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <TabContent activeTab={activeTab} />
      </div>
    </section>
  );
};

export default Playground;
