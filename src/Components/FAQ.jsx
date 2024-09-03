import React from 'react';
import RenderCard from './QuestionsCards';

function FAQ() {
  return (
    <div className='bg-custom-light py-10 px-4 md:px-8 flex flex-col items-center h-[623px]'>
      <h2 className='text-3xl md:text-4xl font-semibold font-poppins mb-6 text-center'>Frequently Asked Questions</h2>
      <p className='font-light font-poppins text-[#757575] mb-8 text-center max-w-2xl'>
        Here are some of the most common questions our customers ask. If you need more information, feel free to reach out to our support team.
      </p>
      <div className='w-full max-w-3xl mx-auto space-y-4'>
        <RenderCard />
        <RenderCard />
        <RenderCard />
        <RenderCard />
      </div>
    </div>
  );
}

export default FAQ;
