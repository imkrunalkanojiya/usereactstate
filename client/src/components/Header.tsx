import React from 'react';
import { Link } from 'wouter';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg 
            viewBox="0 0 24 24"
            className="w-6 h-6 text-primary"
            fill="currentColor"
          >
            <path d="M17.25,12C17.25,12.23 17.23,12.46 17.2,12.68L18.68,13.84C18.81,13.95 18.85,14.13 18.76,14.29L17.36,16.71C17.27,16.86 17.09,16.92 16.93,16.86L15.19,16.16C14.83,16.44 14.43,16.67 14,16.85L13.75,18.7C13.72,18.87 13.57,19 13.4,19H10.6C10.43,19 10.28,18.87 10.25,18.7L10,16.85C9.56,16.67 9.17,16.44 8.81,16.16L7.07,16.86C6.91,16.92 6.73,16.86 6.64,16.71L5.24,14.29C5.15,14.13 5.19,13.95 5.32,13.84L6.8,12.68C6.77,12.46 6.75,12.23 6.75,12C6.75,11.77 6.77,11.54 6.8,11.32L5.32,10.16C5.19,10.05 5.15,9.86 5.24,9.71L6.64,7.29C6.73,7.13 6.91,7.07 7.07,7.13L8.81,7.84C9.17,7.56 9.56,7.32 10,7.15L10.25,5.29C10.28,5.13 10.43,5 10.6,5H13.4C13.57,5 13.72,5.13 13.75,5.29L14,7.15C14.43,7.32 14.83,7.56 15.19,7.84L16.93,7.13C17.09,7.07 17.27,7.13 17.36,7.29L18.76,9.71C18.85,9.86 18.81,10.05 18.68,10.16L17.2,11.32C17.23,11.54 17.25,11.77 17.25,12Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="text-xl font-semibold">ReactState</span>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">v0.1.0</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition">
            Overview
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition">
            Documentation
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition">
            Examples
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition">
            API
          </Link>
        </nav>
        <div className="flex items-center space-x-3">
          <button className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md transition flex items-center">
            <svg
              className="w-4 h-4 mr-1.5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
            </svg>
            GitHub
          </button>
          <button className="text-sm bg-primary hover:bg-blue-600 text-white px-3 py-1.5 rounded-md transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
