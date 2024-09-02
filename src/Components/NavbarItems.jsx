function NavbarItems({ name}) {
  return (
    <div 
      
      className="px-3 py-2 hover:bg-gray-200 hover:rounded-md">
      <a href='#' className='text-gray-700 hover:text-gray-900 font-medium'>
        {name}
      </a>
    </div>
  );
}

export default NavbarItems;
