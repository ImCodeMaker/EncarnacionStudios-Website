import React from 'react';
import TestimonialsCards from './TestimonialsCards';

function Testimonials() {
  return (
    <div className='bg-slate-300 py-10 px-4 flex flex-col items-center'>
      <h2 className='text-3xl md:text-4xl font-semibold font-inter mb-6 text-center'>Testimonials</h2>
      <p className='font-light font-inter text-[#757575] mb-8 text-center max-w-2xl'>
        Here are some of the most common questions our customers ask. If you need more information, feel free to reach out to our support team.
      </p>
      <div className='flex flex-col items-center w-full max-w-6xl'>
        <div className='flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full'>
          <div className='flex-1 min-w-[300px]'>
            <TestimonialsCards 
              title={'Test'} 
              text={'I don’t even know what to put in here but I know that I have to put something but yeah, it’s okay I guess.'} 
              name={'John Doe'} 
              reviewDate={'12/01/2006'}
            />
          </div>
          <div className='flex-1 min-w-[300px]'>
            <TestimonialsCards 
              title={'Test'} 
              text={'I don’t even know what to put in here but I know that I have to put something but yeah, it’s okay I guess.'} 
              name={'John Doe'} 
              reviewDate={'12/01/2006'}
            />
          </div>
          <div className='flex-1 min-w-[300px]'>
            <TestimonialsCards 
              title={'Test'} 
              text={'I don’t even know what to put in here but I know that I have to put something but yeah, it’s okay I guess.'} 
              name={'John Doe'} 
              reviewDate={'12/01/2006'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
