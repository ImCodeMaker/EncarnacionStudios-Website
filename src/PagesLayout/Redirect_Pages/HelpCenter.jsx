import React from 'react';
import Button from '../../Components/Button';

const baseUrl = window.location.origin;

function HelpCenter() {
  // Function to handle button click and redirect
  const handleButtonClick = () => {
    window.location.href = `${baseUrl}/contact`;
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-slate-300 min-h-screen flex flex-col justify-center items-center h-max px-4 md:px-8">
        <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold font-inter text-center">
          Help Center
        </h1>
      </div>

      {/* Help Center Content Section */}
      <div className="bg-custom-light py-12 px-4 md:px-8 lg:px-12 flex flex-col justify-center items-center min-h-screen">
        <div className="max-w-3xl text-center">
          <p className="text-lg md:text-2xl font-semibold mb-4">
            Troubleshooting Assistance
          </p>
          <p className="text-md md:text-lg leading-relaxed mb-6">
            At Encarnacion Studios, we strive to ensure that your app operates smoothly. If you encounter any errors or issues within the first month of coverage, please don’t hesitate to contact us. Our support team will work diligently to resolve any problems you may face, ensuring your satisfaction with our services.
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            After the initial coverage period, we will still be available to assist you with any issues, though a small service fee may apply for repairs or troubleshooting.
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            We encourage you to reach out if you need help; your success is our priority!
          </p>
        </div>

        {/* Button Section */}
        <div className="w-full flex justify-center mt-8">
          <Button
            className="px-6 py-3 md:px-8 md:py-4 bg-custom-dark text-custom-light rounded-full shadow-lg hover:bg-gray-700 transition ease-in-out"
            text="Conctact Us"
            onClick={handleButtonClick} 
          />
        </div>
      </div>
    </>
  );
}

export default HelpCenter;
