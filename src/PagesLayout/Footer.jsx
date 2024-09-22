import React from "react";
import Logo from "./../Assets/Images/logo.svg";
import FacebookIcon from "./../Assets/Images/facebook.svg";
import TwitterIcon from "./../Assets/Images/twitter.svg";
import InstagramIcon from "./../Assets/Images/instagram.svg";

function Footer() {
  const baseUrl = window.location.origin; // Base URL of your app

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-300 flex flex-col md:flex-row justify-between items-center px-5 py-8 md:py-10">
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 w-full md:w-auto">
        <img src={Logo} alt="Logo" className="h-14 w-14 mb-4" />
        <div className="flex space-x-4 mt-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" className="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" className="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="h-6 w-6 hover:opacity-75" />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full md:w-auto md:justify-between">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:w-1/4">
          <h2 className="text-sm md:text-base font-bold font-inter mb-2">Company</h2>
          <a href={`${baseUrl}/about`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-light font-inter hover:text-gray-700">
            About us
          </a>
          <a href={`${baseUrl}/contact`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-light font-inter hover:text-gray-700">
            Contact
          </a>
        </div>
        <div className='flex flex-col items-center md:items-start mb-6 md:mb-0 md:w-1/4'>
          <h2 className='text-sm md:text-base font-bold font-inter mb-2'>Products & Services</h2>
          <button 
            onClick={() => handleScroll('services-section')} 
            className='text-xs md:text-sm font-light font-inter hover:text-gray-700 bg-transparent border-none cursor-pointer'
          >
            Full Stack Web Apps
          </button>
          <button 
            onClick={() => handleScroll('services-section')} 
            className='text-xs md:text-sm font-light font-inter hover:text-gray-700 bg-transparent border-none cursor-pointer'
          >
            Mobile Apps
          </button>
          <button 
            onClick={() => handleScroll('services-section')} 
            className='text-xs md:text-sm font-light font-inter hover:text-gray-700 bg-transparent border-none cursor-pointer'
          >
            E-commerce Solutions
          </button>
          <button 
            onClick={() => handleScroll('services-section')} 
            className='text-xs md:text-sm font-light font-inter hover:text-gray-700 bg-transparent border-none cursor-pointer'
          >
            API Integration
          </button>
        </div>
        <div className="flex flex-col items-center md:items-start md:w-1/4">
          <h2 className="text-sm md:text-base font-bold font-inter mb-2">Support & Legal</h2>
          <a href={`${baseUrl}/privacy`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-light font-inter hover:text-gray-700">
            Help Center
          </a>
          <a href={`${baseUrl}/contact`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-light font-inter hover:text-gray-700">
            Contact us
          </a>
          <a href={`${baseUrl}/privacy`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-light font-inter hover:text-gray-700">
            Privacy Policy
          </a>
          <a href={`${baseUrl}/terms`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-light font-inter hover:text-gray-700">
            Terms of Service
          </a>
          <a href={`${baseUrl}/cookies`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-light font-inter hover:text-gray-700">
            Cookies Policy
          </a>
          <a href={`${baseUrl}/data-security`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-light font-inter hover:text-gray-700">
            Data Security
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
