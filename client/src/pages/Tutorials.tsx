import React from 'react';
import { Link } from 'wouter';

interface TutorialCardProps {
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  slug: string;
  image: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({ title, description, level, duration, slug, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <div className="mb-2">
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
              level === 'Beginner' ? 'bg-green-500' : 
              level === 'Intermediate' ? 'bg-yellow-500' : 
              'bg-red-500'
            }`}>
              {level}
            </span>
            <span className="ml-2 text-xs">
              {duration}
            </span>
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-4 flex-1">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <Link href={`/tutorials/${slug}`} className="text-primary hover:text-blue-700 font-medium text-sm inline-flex items-center">
          Read Tutorial
          <svg 
            viewBox="0 0 24 24"
            className="w-4 h-4 ml-1"
            fill="currentColor"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Tutorials: React.FC = () => {
  const tutorials: TutorialCardProps[] = [
    {
      title: "Getting Started with ReactState",
      description: "Learn the basics of ReactState and how to integrate it into your React application.",
      level: "Beginner",
      duration: "20 min read",
      slug: "getting-started",
      image: "/tutorials/getting-started.jpg"
    },
    {
      title: "Managing Complex State Trees",
      description: "Techniques for organizing and managing deeply nested state structures efficiently.",
      level: "Intermediate",
      duration: "25 min read",
      slug: "complex-state",
      image: "/tutorials/complex-state.jpg"
    },
    {
      title: "Performance Optimization Strategies",
      description: "Learn how to optimize your app's performance when using ReactState for large state trees.",
      level: "Advanced",
      duration: "30 min read",
      slug: "performance",
      image: "/tutorials/performance.jpg"
    },
    {
      title: "Building a Todo App with ReactState",
      description: "Step-by-step guide to building a complete todo application with ReactState and React.",
      level: "Beginner",
      duration: "40 min read",
      slug: "todo-app",
      image: "/tutorials/todo-app.jpg"
    },
    {
      title: "State Management with TypeScript",
      description: "How to leverage TypeScript's type system with ReactState for type-safe state management.",
      level: "Intermediate",
      duration: "35 min read",
      slug: "typescript",
      image: "/tutorials/typescript.jpg"
    },
    {
      title: "Authentication with ReactState",
      description: "Implementing user authentication and managing auth state with ReactState.",
      level: "Intermediate",
      duration: "45 min read",
      slug: "authentication",
      image: "/tutorials/authentication.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-flex items-center">
            <svg 
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              fill="currentColor"
            >
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Tutorials</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Step-by-step guides to help you master ReactState in your projects.
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="text-sm font-medium text-gray-700">Filter by:</div>
            <div className="space-x-2">
              <button className="px-3 py-1.5 bg-primary text-white text-sm rounded-md">
                All
              </button>
              <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-md">
                Beginner
              </button>
              <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-md">
                Intermediate
              </button>
              <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-md">
                Advanced
              </button>
            </div>
            <div className="ml-auto">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search tutorials..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <svg 
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                  fill="currentColor"
                >
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <TutorialCard key={index} {...tutorial} />
          ))}
        </div>
        
        {/* Featured Tutorial */}
        <div className="mt-16 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 md:p-8 md:flex">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Featured Tutorial</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Building a Real-Time Dashboard with ReactState</h2>
              <p className="text-gray-600 mb-6">
                Learn how to create a responsive real-time dashboard that updates based on user interactions and external data sources. This comprehensive tutorial covers everything from setting up your project to deploying your finished application.
              </p>
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-6">
                  <svg 
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="currentColor"
                  >
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5M7.5,12A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,13.5A1.5,1.5 0 0,1 7.5,12M16.5,12A1.5,1.5 0 0,1 18,13.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 15,13.5A1.5,1.5 0 0,1 16.5,12Z" />
                  </svg>
                  <span className="text-sm text-gray-600">Intermediate</span>
                </div>
                <div className="flex items-center">
                  <svg 
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="currentColor"
                  >
                    <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                  </svg>
                  <span className="text-sm text-gray-600">60 min read</span>
                </div>
              </div>
              <Link href="/tutorials/real-time-dashboard" className="inline-flex items-center px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-md text-sm font-medium transition">
                Read Full Tutorial
                <svg 
                  viewBox="0 0 24 24"
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                >
                  <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg min-h-[300px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg 
                  viewBox="0 0 24 24"
                  className="w-16 h-16 mx-auto text-gray-400 mb-4"
                  fill="currentColor"
                >
                  <path d="M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M5,5V7H19V5H5Z" />
                </svg>
                <p className="text-gray-600">Interactive dashboard preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;