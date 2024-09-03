import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import Logo from './../Assets/Images/logo.svg';

const menuOptions = [
  { name: 'Home', id: 1 },
  { name: 'Services', id: 2 },
  { name: 'Testimonials', id: 3 },
  { name: 'FAQ', id: 4 },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className='w-full px-6 py-4 bg-white shadow-md flex justify-between items-center'>
      <div className='text-2xl font-bold'>
        <a href='#home'>
          <img src={Logo} alt="Logo" className="h-[65px] transform scale-110" />
        </a>
      </div>

      <div className='hidden md:flex md:items-center md:space-x-8'>
        {menuOptions.map((item) => (
          <NavbarItems key={item.id} name={item.name} />
        ))}
      </div>

      <button
        className='md:hidden flex items-center'
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {isMenuOpen && (
        <div className='md:hidden absolute top-16 right-6 bg-white shadow-md rounded-md w-48'>
          {menuOptions.map((item) => (
            <NavbarItems key={item.id} name={item.name} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
