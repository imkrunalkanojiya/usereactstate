import React from 'react';
import {useStateValue} from "@imkrunalkanojiya/usereactstate"

const CounterExample: React.FC = () => {
  const [counter, setCounter] = useStateValue<number>('counter');

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="font-medium text-gray-900">Counter App Example</h3>
        <p className="text-sm text-gray-500 mt-1">Basic counter using global state</p>
      </div>
      
      <div className="p-4">
        {/* Counter Example Preview */}
        <div className="border rounded-md p-4 mb-4 bg-gray-50">
          <div className="text-center">
            <div className="text-4xl font-bold mb-3">{counter}</div>
            <div className="flex justify-center space-x-2">
              <button 
                className="px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => setCounter(counter - 1)}
              >
                -
              </button>
              <button 
                className="px-3 py-1 bg-green-500 text-white rounded"
                onClick={() => setCounter(counter + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        {/* Example Code */}
        <div className="text-sm font-mono bg-gray-900 text-white p-3 rounded overflow-auto" style={{ maxHeight: '300px' }}>
          <pre>
{`import React from 'react';
import { StateProvider, useStore } from '@imkrunalkanojiya/usereactstate';

const Counter = () => {
  const { getState, setState } = useStore();
  const count = getState('count') || 0;
  
  const increment = () => setState('count', count + 1);
  const decrement = () => setState('count', count - 1);
  
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-3">{count}</div>
      <div className="flex justify-center space-x-2">
        <button onClick={decrement} className="px-3 py-1 bg-red-500 text-white rounded">-</button>
        <button onClick={increment} className="px-3 py-1 bg-green-500 text-white rounded">+</button>
      </div>
    </div>
  );
};

const App = () => (
  <StateProvider initialState={{ count: 0 }}>
    <Counter />
  </StateProvider>
);

export default App;`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CounterExample;
