import React, { useState } from 'react';
import OpenIcon from './../Assets/Images/downicon.svg';

function RenderCard() {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(prev => !prev); // Toggle the state
    };

    return (
        <div
            className={`transition-all duration-300 ease-in-out mb-4 text-left rounded-md border-2 w-full max-w-lg p-4 bg-custom-light shadow-lg flex flex-col hover:shadow-xl transform hover:-translate-y-1 mx-auto ${isOpen ? 'h-auto' : 'h-14'}`}
        >
            <div className='flex items-center justify-between cursor-pointer' onClick={handleClick}>
                <h2 className='text-lg md:text-xl font-semibold font-inter mb-0 flex-1'>Title</h2>
                <button
                    className="p-0 bg-transparent border-none focus:outline-none flex items-center"
                    aria-expanded={isOpen}
                    aria-controls="card-content"
                >
                    <img
                        src={OpenIcon}
                        alt={isOpen ? "Collapse Icon" : "Expand Icon"}
                        className={`w-6 h-6 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                </button>
            </div>
            <div id="card-content" className={`mt-4 ${isOpen ? 'block' : 'hidden'}`}>
                <p className='text-sm md:text-base font-light font-inter'>
                    This is the answer to the question. It can be a detailed explanation or just a brief note.
                </p>
            </div>
        </div>
    );
}

export default RenderCard;