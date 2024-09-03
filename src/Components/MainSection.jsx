import React from 'react';
import Button from './Button';

function MainSection() {
  return (
    <div className='bg-slate-300 h-[500px] flex flex-col justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-7xl font-bold font-poppins'>Encarnacion Studios.</h1>
        <div className='mt-4 text-lg'>
          <Button 
            className='px-4 w-72 py-2 mt-10 bg-custom-dark text-custom-light rounded-lg hover:bg-gray-700' 
            text="Check it out" 
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
