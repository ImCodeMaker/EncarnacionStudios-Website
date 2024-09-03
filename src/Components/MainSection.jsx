import React from 'react';
import Button from './Button';

function MainSection() {
  return (
    <div className='bg-slate-300 h-[500px] flex flex-col justify-center items-center px-4 md:px-8'>
      <div className='text-center'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold font-inter'>
          Encarnacion Studios.
        </h1>
        <div className='mt-4 text-lg'>
          <Button 
            className='px-6 py-3 mt-6 md:px-8 md:py-4 md:mt-10 bg-custom-dark text-custom-light rounded-lg hover:bg-gray-700'
            text="Check it out" 
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
