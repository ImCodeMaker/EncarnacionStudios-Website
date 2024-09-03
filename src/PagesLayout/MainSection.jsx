import React from 'react';
import Button from '../Components/Button';

function MainSection() {
  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='home' className='bg-slate-300 h-[700px] flex flex-col justify-center items-center px-4 md:px-8'>
      <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold font-inter text-center'>
        Encarnacion Studios.
      </h1>
      <div className='mt-6'>
        <Button 
          className='px-6 py-3 md:px-8 md:py-4 bg-custom-dark text-custom-light rounded-lg hover:bg-gray-700'
          text="Check it out" 
          onClick={scrollToServices} // Add this line
        />
      </div>
    </div>
  );
}

export default MainSection;
