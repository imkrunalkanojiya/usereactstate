import React from 'react';
import Header from '@/components/Header';
import Playground from '@/components/playground/Playground';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { StateDebugger } from '@/lib/StateDebugger';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Add state debugger to track state changes */}
      <StateDebugger />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-100 py-12 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple React State Management</h1>
              <p className="text-lg text-gray-600 mb-8">
                A lightweight, zero-configuration global state solution for React applications
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-2.5 bg-primary hover:bg-blue-600 text-white rounded-md font-medium transition">
                  Install Package
                </button>
                <button className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md font-medium transition">
                  Read Docs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Development Playground Section */}
        <Playground />

        {/* Features Section */}
        <Features />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
