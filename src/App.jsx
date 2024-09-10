import FAQ from './PagesLayout/FAQ';
import MainSection from './PagesLayout/MainSection';
import Navbar from './PagesLayout/Navbar';
import ServicesSection from './PagesLayout/ServicesSection';
import Testimonials from './PagesLayout/Testimonials';
import Footer from './PagesLayout/Footer';
import PolicyRoutes from './Components/Routers'

function App() {
  return (
    <div className='landingpage'>
      <Navbar/>
      <div id="main-section">
        <MainSection/>
      </div>
      <div id="services-section">
        <ServicesSection/>
      </div>
      <div id="testimonials-section">
        <Testimonials/>
      </div>
      <div id="faq-section">
        <FAQ/>
      </div>
      <Footer/>
      <PolicyRoutes /> {/* Render the routes for policies here */}

    </div>
  );
}

export default App;
