
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-32">
      <div className="text-center">
        <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-4 text-desert-orange">
          404
        </h1>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
          Page Not Found
        </h2>
        <p className="text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to our delicious menu.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/"
            className="bg-desert-orange hover:bg-opacity-90 text-white px-6 py-3 rounded-full transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            to="/menu"
            className="border-2 border-desert-orange text-desert-orange hover:bg-desert-orange hover:text-white px-6 py-3 rounded-full transition-colors"
          >
            View Our Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
