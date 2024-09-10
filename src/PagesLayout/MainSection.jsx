import React from 'react';
import Button from '../Components/Button';
import Typewriter from '../Components/TypeWriter';// Ensure the path is correct

function MainSection() {
  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='home' className='bg-slate-300 min-h-screen flex flex-col justify-center items-center px-4 md:px-8'>
      <h1>
        <Typewriter
          className='text-4xl md:text-6xl lg:text-7xl font-bold font-inter text-center'
          text="Encarnacion Studios."
          speed={100}
        />
      </h1>
      <div className='mt-6'>
        <Button 
          className='px-6 py-3 md:px-8 md:py-4 bg-custom-dark text-custom-light rounded-lg hover:bg-gray-700'
          text="Check it out" 
          onClick={scrollToServices} 
        />
      </div>
    </div>
  );
}

export default MainSection;