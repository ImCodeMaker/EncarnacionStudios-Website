import React from 'react';
import RenderCard from '../Components/QuestionsCards';

function FAQ() {
  return (
    <div id='faq' className='bg-custom-light py-10 px-4 md:px-8 min-h-screen flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center flex-1 max-w-4xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-semibold font-inter mb-6 text-center mt-16'>
          Frequently Asked Questions
        </h2>
        <p className='font-light font-poppins text-[#757575] mb-8 text-center'>
          Here are some of the most common questions our customers ask. If you need more information, feel free to reach out to our support team.
        </p>
        <div className='w-full space-y-4'>
          <RenderCard text={'After the app is delivered, you can request changes or updates. Any modifications will be subject to a service fee, which will be communicated to you in advance. Please provide detailed information about the changes you want, and we will assess the request to give you an estimated timeline for completion.'}
          
          title={'What happens if I need changes made to the app after delivery?'} />

          <RenderCard text={'At Encarnacion Studios, we prioritize security by implementing industry-standard encryption for all user data. Additionally, we conduct regular security audits and updates to address potential vulnerabilities. We encourage clients to follow best practices for app security, such as using secure passwords and keeping the app updated.'} 
          
          title={'How can I ensure the security of my app and user data?'} />

          <RenderCard text={'Our policy states that once a project is underway, the initial deposit of 25% is non-refundable. However, if you decide to cancel before work has begun, we can refund the deposit. If the project is completed and delivered, we cannot issue refunds. Please review our terms for more detailed information.'} 
          title={'What is your policy regarding refunds or cancellations?'}/>

          <RenderCard text={'Ownership of the app and its assets transfers to you only after full payment has been made. Once you have completed all payments, you have the right to sell or distribute the app. However, using any part of the app for commercial purposes without authorization during the development process may result in penalties under copyright law.'}
          
          title={'Can I sell or distribute the app developed by Encarnacion Studios?'}
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;