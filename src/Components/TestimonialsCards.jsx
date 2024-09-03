import React from 'react';
import JohnDoe from './../Assets/Images/JohnDoe.png';

function TestimonialsCards({ title, text, name, reviewDate }) {
  return (
    <div className='text-left rounded-md border-2 w-80 p-6 bg-custom-light shadow-lg'>
      <h2 className='text-lg font-semibold font-poppins mb-4'>{title}</h2>
      <p className='text-sm font-light font-poppins mb-4'>
        {text}
      </p>
      <div className='flex items-center'>
        <img src={JohnDoe} className='h-[25px] w-[25px] rounded-full mr-2' />
        <div>
          <p className='text-sm font-medium'>{name}</p>
          <p className='text-xs text-gray-500'>{reviewDate}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCards;