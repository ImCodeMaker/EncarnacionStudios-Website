import React from "react";
import Button from "../../Components/Button";

const baseUrl = window.location.origin;

function TermsOfService() {
  // Function to handle button click and redirect
  const handleButtonClick = () => {
    window.location.href = `${baseUrl}/`;
  };

  return (
    <div className="bg-custom-light min-h-screen flex flex-col justify-center items-center py-12 px-4 md:px-8 lg:px-12">
      <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold font-inter text-center mb-6">
        Terms of Service
      </h1>

      <div className="max-w-3xl text-center">
        <p className="text-lg md:text-2xl font-semibold mb-4">
          Welcome to Encarnacion Studios
        </p>

        <p className="text-md md:text-lg leading-relaxed mb-6">
          These Terms of Service govern your access to and use of the services
          provided by Encarnacion Studios. By entering into an agreement with
          us, you acknowledge and agree to these terms.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          1. Payment Structure
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          Upon reaching an agreement for app production, a deposit of 25% of the
          total project cost is required to commence development. This deposit
          secures your place in our production schedule and allows us to
          allocate resources effectively. After payment, you will receive a demo
          of the app, showcasing its functionality and how it will work.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          2. Refund Policy
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          At Encarnacion Studios, we value transparency and fairness in our
          business practices. Please review our refund policy carefully:
        </p>
        <ul className="list-disc list-inside text-md md:text-lg leading-relaxed mb-6">
          <li>
            <strong>Non-Refundable Deposit:</strong> Once a project has
            commenced, the initial deposit of 25% of the total project cost is
            non-refundable. This deposit secures your project in our production
            schedule and enables us to allocate resources effectively.
          </li>
          <li>
            <strong>Cancellation Before Work Begins:</strong> If you choose to
            cancel your project before any work has started, you are entitled to
            a full refund of your initial deposit.
          </li>
          <li>
            <strong>Post-Completion Refunds:</strong> After the project is
            completed and delivered, we are unable to issue any refunds. By this
            stage, we have provided you with a fully functional application as
            per our agreement.
          </li>
        </ul>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          We encourage you to carefully consider these terms and reach out with
          any questions or concerns regarding our refund policy before making
          your deposit. Your satisfaction is our priority, and we are committed
          to delivering quality work.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          3. App Coverage
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          We provide one month of comprehensive app coverage after the app is
          delivered. This coverage includes troubleshooting and bug fixes at no
          additional cost. However, after this period, a small service fee will
          be applicable for any support or maintenance required.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          4. App Delivery and Communication
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          As a small development studio, our priority is to deliver your
          application as quickly as possible. However, we recognize that some
          bugs or issues may arise that could delay the product release. In such
          cases, we will communicate any potential delays promptly to ensure
          transparency and avoid any inconvenience.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          5. Prototypes and Demos
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          Once our contract is finalized and the initial payment is made, you
          will receive a prototype or demo version of the app. It is crucial to
          note that using this demo as a final product without proper
          authorization may result in penalties under the DMCA (Digital
          Millennium Copyright Act).
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          6. Asset Ownership
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          All assets created during the app development process are registered
          under Encarnacion Studios. Full access to these assets will be granted
          only upon completion of all payments as outlined in our agreement.
          This ensures that our intellectual property rights are protected
          throughout the development process.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          7. Third-Party APIs
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          Our applications may utilize APIs and services from third-party
          providers to enhance functionality and user experience. All licenses
          and agreements associated with these APIs will be managed and
          registered by the respective providers. Encarnacion Studios is not
          responsible for any changes, outages, or limitations imposed by these
          third-party services.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          8. Data Privacy
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          Your privacy is paramount to us. We do not retain access to any
          information within the app post-sale, including databases, user data,
          and purchase history. All user information is encrypted to provide an
          additional layer of security.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          9. Responsibilities and Limitations
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          Once the app is fully functional and delivered, and after the
          one-month coverage period, Encarnacion Studios will not be responsible
          for any misuse, defamation, or legal issues arising from the use of
          the app. Any negative consequences resulting from misuse will fall
          under the responsibility of the website owner and those operating the
          app.
        </p>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          If we identify patterns of scam or piracy related to the project,
          Encarnacion Studios reserves the right to terminate the project and
          issue a refund, as such activities contradict our principles and
          values.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          10. Continuous Improvement Commitment
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          At Encarnacion Studios, we are committed to continuous improvement. We
          strive to enhance our products and services based on client feedback
          and industry advancements. We welcome open communication and
          suggestions from our clients to ensure we are meeting and exceeding
          your expectations.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          11. Ethical Standards and Social Responsibility
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          We operate under strict ethical standards and uphold social
          responsibility in our projects. Encarnacion Studios does not condone
          piracy, fraud, or any other illegal activities. We reserve the right
          to conduct due diligence on all projects to ensure compliance with our
          ethical guidelines.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          12. Customer Support
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          We value our clients and offer ongoing support even after project
          completion. Should you have any questions or require assistance, our
          dedicated support team is available to provide help and guidance to
          ensure your satisfaction.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          13. Client Responsibilities
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          Clients are responsible for providing timely and accurate information
          necessary for the completion of the project. Delays in communication
          or failure to provide requested information may affect the project
          timeline. We appreciate your cooperation in making the development
          process smooth and efficient.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          14. Feedback and Communication
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          We encourage clients to provide feedback throughout the development
          process. Regular check-ins and updates will be conducted to ensure
          alignment with your vision and expectations. Your input is crucial in
          creating a product that meets your needs.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          15. Rights Reserved
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          All rights related to the services and products provided by
          Encarnacion Studios are reserved. We retain the right to modify these
          terms at any time, and any changes will be communicated to you in
          writing.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          16. Limitation of Liability
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          In no event shall Encarnacion Studios be liable for any indirect,
          incidental, special, or consequential damages arising out of or in
          connection with the use of our services or products.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">
          17. Limitation of Liability
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          Test test test
        </p>

        <p className="text-md md:text-lg leading-relaxed mb-6">
          By engaging with Encarnacion Studios, you confirm that you understand
          and agree to these Terms of Service. If you have any questions or
          require further clarification regarding these terms, please do not
          hesitate to contact us.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-md md:text-lg leading-relaxed mb-6">
          For any inquiries regarding our Terms of Service, please reach out to
          us at{" "}
          <a
            href="mailto:encarnacionstudiossprt@gmail.com"
            className="text-blue-500 hover:underline"
          >
            encarnacionstudiossprt@gmail.com
          </a>
          .
        </p>
      </div>

      <Button className="mt-8" onClick={handleButtonClick}>
        Go Back
      </Button>

      <footer className="text-center mt-8">
        <p className="text-sm md:text-md">
          © {new Date().getFullYear()} Encarnacion Studios. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default TermsOfService;
