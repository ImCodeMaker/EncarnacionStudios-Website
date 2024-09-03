import React from 'react';
import Cards from './ServicesCard';

function ServicesSection() {
    return (
        <div className='bg-custom-light py-12 px-4 md:px-8'>
            <h2 className='text-3xl md:text-4xl font-semibold font-inter text-center mb-12'>
                Our Services
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
                <Cards 
                    name="FullStack Web Apps." 
                    text="We deliver end-to-end web development, handling both front-end and back-end to create responsive websites, custom apps, and e-commerce platforms. Our solutions are secure, scalable, and tailored to your needs." 
                />
                <Cards 
                    name="Software Development" 
                    text="We develop custom applications tailored to your needs, handling everything from intuitive design to robust back-end functionality. Our solutions are secure, scalable, and optimized for performance." 
                />
                <Cards 
                    name="Mobile Development" 
                    text="We build custom mobile apps for iOS and Android, ensuring seamless performance and user experience. Our apps are designed to be intuitive, scalable, and optimized for all devices." 
                />
            </div>
        </div>
    );
}

export default ServicesSection;
