import React from 'react';
import JohnDoe from './../Assets/Images/JohnDoe.png';

function TestimonialsCards({ title, text, name, reviewDate }) {
  return (
    <div className='bg-custom-light text-left rounded-md border-2 w-full max-w-sm md:max-w-md p-6 shadow-lg mx-auto'>
      <h2 className='text-lg md:text-xl font-semibold font-poppins mb-4'>{title}</h2>
      <p className='text-sm md:text-base font-light font-poppins mb-4'>
        {text}
      </p>
      <div className='flex items-center'>
        <img src={JohnDoe} alt='Reviewer' className='h-8 w-8 rounded-full mr-2' />
        <div>
          <p className='text-sm md:text-base font-medium'>{name}</p>
          <p className='text-xs text-gray-500'>{reviewDate}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCards;
