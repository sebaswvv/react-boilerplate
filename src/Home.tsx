import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="p-4 max-w-md mx-auto mt-10 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-900">Welcome to the Home Page!</h1>
            <p className="text-gray-700">This is a simple home component with Tailwind CSS styling.</p>
        </div>
    );
};

export default Home;