import React from 'react';

function NavbarItems({ name, onClick }) {
  return (
    <button 
      onClick={() => onClick(name.toLowerCase())} 
      className='text-lg font-medium hover:text-gray-700 bg-transparent border-none cursor-pointer'
      aria-label={name} // Agrega un aria-label para accesibilidad
    >
      {name}
    </button>
  );
}

export default NavbarItems;
