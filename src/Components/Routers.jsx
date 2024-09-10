// src/PolicyRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const PrivacyPolicy = () => <div>Privacy Policy Page</div>;
const TermsOfService = () => <div>Terms of Service Page</div>;
const CookiesPolicy = () => <div>Cookies Policy Page</div>;
const DataSecurity = () => <div>Data Security Page</div>;

function PolicyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="/data-security" element={<DataSecurity />} />
      </Routes>
    </Router>
  );
}

export default PolicyRoutes;
