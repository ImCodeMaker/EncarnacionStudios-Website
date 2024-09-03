import React from 'react';
import Cards from '../Components/ServicesCard';

function ServicesSection() {
  return (
    <div 
      id='services' 
      className='bg-custom-light py-12 px-4 flex flex-col items-center min-h-screen'
    >
      <div className='flex flex-col items-center justify-center w-full max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold font-inter mb-6 mt-24'>
          Our Services
        </h2>
        <p className='font-light font-inter text-[#757575] mb-8 max-w-2xl mx-auto'>
          Here are some of the most common questions our customers ask. If you need more information, feel free to reach out to our support team.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center w-full space-y-6 md:space-y-0 md:space-x-8">
          <div className='flex-1 w-full max-w-xs'>
            <Cards 
              name="FullStack Web Apps." 
              text="End-to-end web development with custom apps and e-commerce platforms. Secure and scalable solutions tailored to your needs." 
            />
          </div>
          <div className='flex-1 w-full max-w-xs'>
            <Cards 
              name="Software Development" 
              text="Custom applications from design to robust back-end functionality. Secure, scalable, and optimized for performance." 
            />
          </div>
          <div className='flex-1 w-full max-w-xs'>
            <Cards 
              name="Mobile Development" 
              text="Custom mobile apps for iOS and Android with seamless performance and user experience. Optimized for all devices." 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
