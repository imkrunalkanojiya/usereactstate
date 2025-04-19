import React, { useState } from 'react';

interface TestCase {
  id: string;
  name: string;
  duration: string;
  passing: boolean;
  code: string;
}

const TestSuite: React.FC = () => {
  const [testCases, setTestCases] = useState<TestCase[]>([
    {
      id: '1',
      name: 'Should initialize with default state',
      duration: '12ms',
      passing: true,
      code: `test('should initialize with default state', () => {
  const wrapper = mount(
    <StateProvider initialState={{ count: 0 }}>
      <TestComponent />
    </StateProvider>
  );
  expect(wrapper.find('div').text()).toBe('Count: 0');
});`
    },
    {
      id: '2',
      name: 'Should update nested state correctly',
      duration: '18ms',
      passing: true,
      code: `test('should update nested state correctly', () => {
  const wrapper = mount(
    <StateProvider initialState={{ user: { profile: { name: 'John' } } }}>
      <NestedComponent />
    </StateProvider>
  );
  const button = wrapper.find('button');
  button.simulate('click');
  expect(wrapper.find('div.name').text()).toBe('Name: Jane');
});`
    },
    {
      id: '3',
      name: 'Should merge state objects',
      duration: '15ms',
      passing: true,
      code: `test('should merge state objects', () => {
  const wrapper = mount(
    <StateProvider initialState={{ settings: { theme: 'light' } }}>
      <MergeComponent />
    </StateProvider>
  );
  const button = wrapper.find('button');
  button.simulate('click');
  expect(wrapper.find('div.theme').text()).toBe('Theme: dark');
  expect(wrapper.find('div.lang').text()).toBe('Language: en');
});`
    }
  ]);

  const runTests = () => {
    // Simulate running tests
    setTestCases(testCases.map(test => ({
      ...test,
      duration: `${Math.floor(Math.random() * 20) + 10}ms`
    })));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700">Test Suite</span>
          <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
            {testCases.filter(t => t.passing).length} Tests Passing
          </span>
        </div>
        <button 
          className="px-3 py-1 text-sm bg-primary hover:bg-blue-600 text-white rounded"
          onClick={runTests}
        >
          Run Tests
        </button>
      </div>
      
      <div className="p-4 space-y-4">
        {testCases.map(testCase => (
          <div key={testCase.id} className="border border-gray-200 rounded-md overflow-hidden">
            <div className={`${testCase.passing ? 'bg-green-50' : 'bg-red-50'} px-4 py-2 flex justify-between items-center`}>
              <div className="flex items-center">
                {testCase.passing ? (
                  <svg 
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-green-600 mr-2"
                    fill="currentColor"
                  >
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                ) : (
                  <svg 
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-red-600 mr-2"
                    fill="currentColor"
                  >
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                  </svg>
                )}
                <span className="font-medium text-sm">{testCase.name}</span>
              </div>
              <span className={`text-xs ${testCase.passing ? 'text-green-600' : 'text-red-600'}`}>{testCase.duration}</span>
            </div>
            <div className="p-3 text-sm">
              <pre className="text-xs font-mono bg-gray-50 p-2 rounded">
                {testCase.code}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSuite;
