import React from 'react';

function ServicesCard({ name, text }) {
  return (
    <div className='bg-white text-left rounded-md border-2 border-gray-300 w-full md:w-80 p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-auto'>
      <h2 className='text-lg md:text-xl font-semibold font-inter mb-4'>{name}</h2>
      <p className='text-sm md:text-base font-light font-inter'>
        {text}
      </p>
    </div>
  );
}

export default ServicesCard;
