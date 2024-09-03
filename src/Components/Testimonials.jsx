import React from 'react';
import TestimonialsCards from './TestimonialsCards';

function Testimonials() {
  return (
    <div className='bg-slate-300 h-[400px] flex flex-col items-center overflow-hidden'>
      <div className='w-full'>
        <h2 className='text-2xl font-semibold font-poppins ml-36 mt-[50px]'>Testimonials</h2>
      </div>
      <div className='flex justify-center space-x-12 max-w-6xl mx-auto mt-20 overflow-hidden'>
        <TestimonialsCards title={'Test'} text={'I dont even know what to put in here but i know that i have to put something but yeah, its okay i guess.'} name={'John Doe'} reviewDate={'12/01/2006'}/>
        <TestimonialsCards title={'Test'} text={'I dont even know what to put in here but i know that i have to put something but yeah, its okay i guess.'} name={'John Doe'} reviewDate={'12/01/2006'}/>
        <TestimonialsCards title={'Test'} text={'I dont even know what to put in here but i know that i have to put something but yeah, its okay i guess.'} name={'John Doe'} reviewDate={'12/01/2006'}/>
      </div>
    </div>
  );
}

export default Testimonials;