import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="text-gray-500 mt-3 text-lg">
        Sorry, the page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;
