import React from 'react';
import JohnDoe from './../Assets/Images/JohnDoe.png';

function TestimonialsCards({ title, text, name, reviewDate }) {
  return (
    <div className='bg-custom-light text-left rounded-md border-2 border-gray-300 w-full max-w-sm md:max-w-md p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300 ease-in-out mx-auto'>
      {/* Testimonial Title */}
      <h2 className='text-lg md:text-xl font-semibold font-inter mb-4'>{title}</h2>
      
      {/* Testimonial Text */}
      <p className='text-sm md:text-base font-light font-inter mb-4'>
        {text}
      </p>
      
      {/* Reviewer Information */}
      <div className='flex items-center space-x-3'>
        <img src={JohnDoe} alt={name} className='h-10 w-10 rounded-full object-cover' />
        <div>
          <p className='text-sm md:text-base font-medium'>{name}</p>
          <p className='text-xs text-gray-500'>{reviewDate}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCards;
