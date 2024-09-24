import React from "react";
import Button from "../../Components/Button";

const baseUrl = window.location.origin;

function DataSecurity() {
  // Function to handle button click and redirect
  const handleButtonClick = () => {
    window.location.href = `${baseUrl}/`;
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-slate-300 min-h-screen flex flex-col justify-center items-center h-max px-4 md:px-8">
        <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold font-inter text-center">
          Data Security & Privacy
        </h1>
      </div>

      {/* Data Security Content Section */}
      <div className="bg-custom-light py-12 px-4 md:px-8 lg:px-12 flex flex-col justify-center items-center min-h-screen">
        <div className="max-w-3xl text-center">
          <p className="text-lg md:text-2xl font-semibold mb-4">
            Our Commitment to Security
          </p>
          <p className="text-md md:text-xl font-light italic mb-6">
            Protecting Your Data Since 2024
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            At Encarnacion Studios, we prioritize the security and privacy of our clients' data. We implement robust measures to ensure that your information is protected at all times.
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            Our approach includes using advanced encryption techniques, regular security audits, and compliance with industry standards to safeguard your data. We believe that transparency is key, and we strive to keep our clients informed about our security practices.
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            To further enhance our security measures, we utilize a range of trusted tools and services, including Google BaaS (Backend as a Service), which allows us to streamline our backend processes while ensuring data integrity and security. Additionally, our use of Google Cloud provides scalable and secure infrastructure, allowing us to protect your data with high availability and performance.
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            We also leverage various other services, such as AWS (Amazon Web Services) for cloud storage and processing, ensuring that your data is stored in a secure and compliant manner. Our commitment to using leading technologies is aimed at providing our clients with peace of mind while using our applications.
          </p>

          <p className="text-md md:text-lg leading-relaxed mb-6">
            We understand the importance of trust in our relationships with clients. That's why we are dedicated to building secure applications and services that prioritize user privacy while providing a seamless experience.
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

export default DataSecurity;
