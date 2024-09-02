import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import Logo from './../Assets/Images/logo.svg'

const menuOptions = [
  { name: 'Home', id: 1 },
  { name: 'Services', id: 2 },
  { name: 'Testimonials', id: 3 },
  { name: 'FAQ', id: 4 },
];

function Navbar() {


  return (
    <div className='w-full px-6 py-4 bg-white shadow-md flex justify-between items-center'>
      
      <div className='text-2xl font-semibold'>
        <a href='#'>
        <img src={Logo} alt="Logo" className="h-[70px]" />
        </a>
       
      </div>

      
      <div className='flex items-center space-x-4'>
        {menuOptions.map((item) => (
          <NavbarItems
            key={item.id}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;