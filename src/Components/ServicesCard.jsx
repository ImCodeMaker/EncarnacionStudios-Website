import React from 'react';

function ServicesCard({ name, text }) {
  return (
    <div className='bg-white text-left rounded-md border-2 border-gray-300 w-full md:w-80 p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300 ease-in-out mx-auto'>
      {/* Card Title */}
      <h2 className='text-lg md:text-xl font-semibold font-inter mb-4'>{name}</h2>
      
      {/* Card Content */}
      <p className='text-sm md:text-base font-light font-inter'>
        {text}
      </p>
    </div>
  );
}

export default ServicesCard;
