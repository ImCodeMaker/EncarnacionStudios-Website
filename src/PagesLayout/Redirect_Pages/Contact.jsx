import React from "react";
import Button from "../../Components/Button";

const baseUrl = window.location.origin;

function ContactUs() {
  // Function to handle button click and redirect
  const handleButtonClick = () => {
    window.location.href = `${baseUrl}/`;
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-slate-300 min-h-screen flex flex-col justify-center items-center h-max px-4 md:px-8">
        <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold font-inter text-center">
          Contact Us
        </h1>
      </div>

      {/* Contact Us Content Section */}
      <div className="bg-custom-light py-12 px-4 md:px-8 lg:px-12 flex flex-col justify-center items-center min-h-screen">
        <div className="max-w-3xl text-center">
          <p className="text-lg md:text-2xl font-semibold mb-4">
            Get in Touch with Encarnacion Studios
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            If you’d like to know more about our services or have any inquiries, feel free to reach out to us.
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            <strong>Email:</strong> encarnacionstudiossprt@gmail.com
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            Whether you need assistance with <strong>web development</strong>, <strong>mobile applications</strong>, or <strong>API integrations</strong>, we’re here to help. Just drop us an email, and our team will respond to you shortly.
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            We are located in <strong>Santo Domingo, Dominican Republic</strong>, and always available to collaborate remotely with clients globally.
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            Thank you for considering Encarnacion Studios for your project!
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
    </>
  );
}

export default ContactUs;
