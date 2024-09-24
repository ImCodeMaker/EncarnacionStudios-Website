import React from "react";
import Button from "../../Components/Button";

const baseUrl = window.location.origin;

function AboutUs() {
  // Function to handle button click and redirect
  const handleButtonClick = () => {
    window.location.href = `${baseUrl}/`;
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-slate-300 min-h-screen flex flex-col justify-center items-center h-max px-4 md:px-8">
        <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold font-inter text-center">
          Who Are We?
        </h1>
      </div>

      {/* About Us Content Section */}
      <div className="bg-custom-light py-12 px-4 md:px-8 lg:px-12 flex flex-col justify-center items-center min-h-screen">
        <div className="max-w-3xl text-center">
          <p className="text-lg md:text-2xl font-semibold mb-4">
            Encarnacion Studios
          </p>
          <p className="text-md md:text-xl font-light italic mb-6">
            Founded in 2024 by Teudy Joshua Encarnacion
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            At Encarnacion Studios, we specialize in building exceptional
            digital solutions tailored to meet the diverse needs of our clients.
            From cutting-edge <strong>web applications</strong> to{" "}
            <strong>mobile apps</strong> and seamless{" "}
            <strong>API integrations</strong>, we are committed to delivering
            software that not only functions flawlessly but also stands out
            through aesthetically pleasing design.
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            Our expertise extends beyond web and mobile to{" "}
            <strong>desktop applications</strong>, ensuring that no matter the
            platform, we build with precision, creativity, and user experience
            in mind. Our goal is simple: to achieve excellence by crafting
            websites and applications with powerful features and elegant
            interfaces, solidifying our place among the finest in the industry.
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

export default AboutUs;
