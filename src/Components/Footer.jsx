import React from 'react';
import Logo from './../Assets/Images/logo.svg';

function Footer() {
  return (
    <div className='bg-slate-300 flex flex-col md:flex-row justify-between items-center px-5 py-5 md:py-10'>
      <div className='flex items-center mb-4 md:mb-0'>
        <img src={Logo} alt='Logo' className='h-14 w-14' />
      </div>
      <div className='flex flex-col items-center md:items-start'>
        <h2 className='text-sm md:text-base font-bold font-inter'>Company</h2>
      </div>
      <div className='flex space-x-4 mt-4 md:mt-0'>
        <div className='bg-black text-white p-2 rounded'>Wao</div>
        <div className='bg-black text-white p-2 rounded'>Wao</div>
      </div>
    </div>
  );
}

export default Footer;
