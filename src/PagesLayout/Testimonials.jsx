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
          We have yet to have the opportunity to work with clients, but we are committed to delivering exceptional service and look forward to building meaningful relationships in the future.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center w-full space-y-8 md:space-y-0 md:space-x-8'>
          <div className='flex-1 max-w-xs'>
            <TestimonialsCards 
              title={'A New Beginning at Encarnacion Studios'} 
              text={'Although we have not yet had clients, our dedication to excellence in every project is our top priority. We are ready to create memorable experiences.'} 
              name={'Encarnacion Studios Team'} 
              reviewDate={'Review Date: Coming Soon'}
            />
          </div>
          <div className='flex-1 max-w-xs'>
            <TestimonialsCards 
              title={'A Commitment to Quality'} 
              text={'Our focus is to provide exceptional and personalized service. We are eager to embark on our journey with our future clients.'} 
              name={'Encarnacion Studios Team'} 
              reviewDate={'Review Date: Coming Soon'}
            />
          </div>
          <div className='flex-1 max-w-xs'>
            <TestimonialsCards 
              title={'Ready to Serve You'} 
              text={'At Encarnacion Studios, we are prepared to tackle any challenges our clients present and are committed to doing so with the utmost professionalism.'} 
              name={'Encarnacion Studios Team'} 
              reviewDate={'Review Date: Coming Soon'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
