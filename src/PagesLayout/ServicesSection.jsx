import React from 'react';
import Cards from '../Components/ServicesCard';

function ServicesSection() {
  return (
    <div id='services' className='bg-custom-light py-12 px-4 md:px-8 min-h-[700px] flex flex-col justify-center'>
      <h2 className='text-3xl md:text-4xl font-semibold font-inter text-center mb-12'>
        Our Services
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
        <div className='flex-1 max-w-xs'>
          <Cards 
            name="FullStack Web Apps." 
            text="End-to-end web development with custom apps and e-commerce platforms. Secure and scalable solutions tailored to your needs." 
          />
        </div>
        <div className='flex-1 max-w-xs'>
          <Cards 
            name="Software Development" 
            text="Custom applications from design to robust back-end functionality. Secure, scalable, and optimized for performance." 
          />
        </div>
        <div className='flex-1 max-w-xs'>
          <Cards 
            name="Mobile Development" 
            text="Custom mobile apps for iOS and Android with seamless performance and user experience. Optimized for all devices." 
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
