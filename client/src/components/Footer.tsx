import React from 'react';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg 
                viewBox="0 0 24 24"
                className="w-5 h-5 text-primary"
                fill="currentColor"
              >
                <path d="M17.25,12C17.25,12.23 17.23,12.46 17.2,12.68L18.68,13.84C18.81,13.95 18.85,14.13 18.76,14.29L17.36,16.71C17.27,16.86 17.09,16.92 16.93,16.86L15.19,16.16C14.83,16.44 14.43,16.67 14,16.85L13.75,18.7C13.72,18.87 13.57,19 13.4,19H10.6C10.43,19 10.28,18.87 10.25,18.7L10,16.85C9.56,16.67 9.17,16.44 8.81,16.16L7.07,16.86C6.91,16.92 6.73,16.86 6.64,16.71L5.24,14.29C5.15,14.13 5.19,13.95 5.32,13.84L6.8,12.68C6.77,12.46 6.75,12.23 6.75,12C6.75,11.77 6.77,11.54 6.8,11.32L5.32,10.16C5.19,10.05 5.15,9.86 5.24,9.71L6.64,7.29C6.73,7.13 6.91,7.07 7.07,7.13L8.81,7.84C9.17,7.56 9.56,7.32 10,7.15L10.25,5.29C10.28,5.13 10.43,5 10.6,5H13.4C13.57,5 13.72,5.13 13.75,5.29L14,7.15C14.43,7.32 14.83,7.56 15.19,7.84L16.93,7.13C17.09,7.07 17.27,7.13 17.36,7.29L18.76,9.71C18.85,9.86 18.81,10.05 18.68,10.16L17.2,11.32C17.23,11.54 17.25,11.77 17.25,12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="text-lg font-semibold text-white">ReactState</span>
            </div>
            <p className="text-sm text-gray-400">
              A lightweight state management library for React applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/documentation" className="hover:text-primary transition">Documentation</Link></li>
              <li><Link href="/api-reference" className="hover:text-primary transition">API Reference</Link></li>
              <li><Link href="/examples" className="hover:text-primary transition">Examples</Link></li>
              <li><Link href="/tutorials" className="hover:text-primary transition">Tutorials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition">Stack Overflow</a></li>
              <li><a href="#" className="hover:text-primary transition">Twitter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition">MIT License</a></li>
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2023 ReactState. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg 
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg 
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg 
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M4.27,3L3,4.27L5.23,6.5C5.1,6.65 5,6.82 5,7V19C5,19.55 5.45,20 6,20H18C18.1,20 18.2,19.97 18.29,19.93L21.73,23.37L23,22.1L4.27,3M9,7H10.18L13,9.82V10H9V7M10.82,11H13V13.18L10.82,11M15,10.82L16.73,12.55C16.9,12.21 17,11.85 17,11.45V7C17,6.45 16.55,6 16,6H12.82L15,8.18V10.82M8,16H13.1L14.1,17H8V16M6.41,5.9L5.6,5.09C5.72,5.06 5.85,5.04 6,5H16.18L17.18,6H6.41Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
