import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutUs from './PagesLayout/Redirect_Pages/AboutUs'; 
import Contact from './PagesLayout/Redirect_Pages/Contact'; 
import PrivacyPolicy from './PagesLayout/Redirect_Pages/PrivacyPolicy'; 
import TermsOfService from './PagesLayout/Redirect_Pages/TermsOfService'; 
import DataSecurity from './PagesLayout/Redirect_Pages/DataSecurity';
import CookiesPolicy from './PagesLayout/Redirect_Pages/CookiesPolicy'
import LandingPage from './LandingPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} /> {/* Your main home component */}
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/privacy" element={<PrivacyPolicy />} />
        <Route exact path="/terms" element={<TermsOfService />} />
        <Route exact path="/cookies" element={<CookiesPolicy />} />
        <Route exact path="/data-security" element={<DataSecurity />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
