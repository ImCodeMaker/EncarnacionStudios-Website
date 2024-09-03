import React from 'react';

function NavbarItems({ name }) {
  return (
    <a 
      href={`#${name.toLowerCase()}`} 
      className='text-lg font-medium hover:text-gray-700'
    >
      {name}
    </a>
  );
}

export default NavbarItems;
