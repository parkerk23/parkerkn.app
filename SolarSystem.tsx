// components/SolarSystem.tsx
import React from 'react';

const SolarSystem: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative">
        <div className="sun bg-yellow-500 rounded-full w-24 h-24 flex items-center justify-center">
          <span className="text-white text-xl">Your Name</span>
        </div>
        {/* Planets */}
        <div className="planet bg-blue-400 rounded-full w-6 h-6 absolute" style={{ top: '10px', left: '100px' }} />
        <div className="planet bg-red-400 rounded-full w-6 h-6 absolute" style={{ top: '10px', left: '150px' }} />
        {/* Add more planets */}
      </div>
    </div>
  );
};

export default SolarSystem;
