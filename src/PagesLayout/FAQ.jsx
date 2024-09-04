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
          <RenderCard />
          <RenderCard />
          <RenderCard />
          <RenderCard />
        </div>
      </div>
    </div>
  );
}

export default FAQ;