function NavbarItems({ name }) {
  return (
    <div className="px-3 py-2 hover:bg-gray-100 rounded-md transition duration-200 ease-in-out">
      <a href='#' className='text-gray-600 hover:text-gray-800 font-normal text-base tracking-wide'>
        {name}
      </a>
    </div>
  );
}

export default NavbarItems