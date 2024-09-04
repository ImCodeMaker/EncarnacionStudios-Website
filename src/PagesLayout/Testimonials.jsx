import React from 'react';
import TestimonialsCards from '../Components/TestimonialsCards';

function Testimonials() {
  return (
    <div id='testimonials' className='bg-slate-300 py-12 px-4 flex flex-col items-center min-h-[700px]'>
      <div className='flex flex-col items-center justify-center w-full max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold font-inter mb-6 mt-24'>
          Testimonials
        </h2>
        <p className='font-light font-inter text-[#757575] mb-8 max-w-2xl mx-auto'>
          Here are some of the most common questions our customers ask. If you need more information, feel free to reach out to our support team.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center w-full space-y-8 md:space-y-0 md:space-x-8'>
          <div className='flex-1 max-w-xs'>
            <TestimonialsCards 
              title={'Test'} 
              text={'I don’t even know what to put in here but I know that I have to put something but yeah, it’s okay I guess.'} 
              name={'John Doe'} 
              reviewDate={'12/01/2006'}
            />
          </div>
          <div className='flex-1 max-w-xs'>
            <TestimonialsCards 
              title={'Test'} 
              text={'I don’t even know what to put in here but I know that I have to put something but yeah, it’s okay I guess.'} 
              name={'John Doe'} 
              reviewDate={'12/01/2006'}
            />
          </div>
          <div className='flex-1 max-w-xs'>
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