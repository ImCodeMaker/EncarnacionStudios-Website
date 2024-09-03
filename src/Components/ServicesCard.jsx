import React from 'react';

function ServicesCard({ name, text }) {
  return (
    <div className='text-left rounded-md border-2 w-80 p-6'>
      <h2 className='text-lg font-semibold font-poppins mb-4'>{name}</h2>
      <p className='text-sm font-light font-poppins'>
        {text}
      </p>
    </div>
  );
}

export default ServicesCard;
