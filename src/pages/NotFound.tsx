import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from '../components/Link';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={80} className="text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved to a different location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300">
            Go to Homepage
          </Link>
          <Link to="/contact" className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;