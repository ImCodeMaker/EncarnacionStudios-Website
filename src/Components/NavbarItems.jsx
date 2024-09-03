import React from 'react';

function NavbarItems({ name }) {
  return (
    <div className="px-3 py-2 hover:bg-gray-100 rounded-md transition duration-200 ease-in-out">
      <a href={`#${name.toLowerCase()}`} className='text-gray-600 hover:text-gray-800 font-normal font-inter text-base tracking-wide'>
        {name}
      </a>
    </div>
  );
}

export default NavbarItems;
