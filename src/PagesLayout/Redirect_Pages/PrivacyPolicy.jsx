import React from 'react';
import Button from '../../Components/Button';

const baseUrl = window.location.origin;

function PrivacyPolicy() {
  // Function to handle button click and redirect
  const handleButtonClick = () => {
    window.location.href = `${baseUrl}/`;
  };

  return (
    <div className="bg-custom-light min-h-screen flex flex-col justify-center items-center py-12 px-4 md:px-8 lg:px-12">
      <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold font-inter text-center mb-6">
        Privacy Policy
      </h1>
      
      <div className="max-w-3xl text-center">
        <p className="text-lg md:text-2xl font-semibold mb-4">
          Your Privacy Matters to Us
        </p>
        
        <p className="text-md md:text-lg leading-relaxed mb-6">
          At Encarnacion Studios, we take your privacy seriously. After the sale of our products, we do not retain access to any information within the app, including databases, user data, and purchase history. We believe that your information should remain yours, and we are committed to ensuring that your data is handled with the utmost care.
        </p>

        <p className="text-md md:text-lg leading-relaxed mb-6">
          All user information is encrypted, providing an additional layer of security. This means that your sensitive data is protected from unauthorized access, and we do not have the means to access it once our products are in your hands.
        </p>

        <p className="text-md md:text-lg leading-relaxed mb-6">
          Our encryption practices comply with industry standards, ensuring that your personal information and transaction details remain confidential and secure. We aim to provide you with peace of mind, knowing that your privacy is our priority.
        </p>

        <p className="text-md md:text-lg leading-relaxed mb-6">
          If you have any questions about our privacy policy or how we handle your information, please feel free to reach out to us. Your trust is essential to us, and we are dedicated to maintaining it through responsible data practices.
        </p>
      </div>

      {/* Button Section */}
      <div className="w-full flex justify-center mt-8">
        <Button
          className="px-6 py-3 md:px-8 md:py-4 bg-custom-dark text-custom-light rounded-full shadow-lg hover:bg-gray-700 transition ease-in-out"
          text="Go to homepage"
          onClick={handleButtonClick} 
        />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
