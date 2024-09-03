import React from 'react';
import Cards from './ServicesCard';

function ServicesSection() {
    return (
        <div className='bg-custom-light py-12'>
            <h2 className='text-2xl font-semibold font-poppins ml-36 mb-8'>Our Services</h2>
            <div className="flex justify-center space-x-12 max-w-6xl mx-auto mt-24">
                <Cards name="FullStack Web Apps." text="We deliver end-to-end web development, handling both front-end and back-end to create responsive websites, custom apps, and e-commerce platforms. Our solutions are secure, scalable, and tailored to your needs." />
                <Cards name="Software Development" text="We develop custom applications tailored to your needs, handling everything from intuitive design to robust back-end functionality. Our solutions are secure, scalable, and optimized for performance." />
                <Cards name="Mobile Development" text="We build custom mobile apps for iOS and Android, ensuring seamless performance and user experience. Our apps are designed to be intuitive, scalable, and optimized for all devices." />
            </div>
        </div>
    );
}

export default ServicesSection;