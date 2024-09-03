import FAQ from './PagesLayout/FAQ';
import MainSection from './PagesLayout/MainSection';
import Navbar from './PagesLayout/Navbar';
import ServicesSection from './PagesLayout/ServicesSection';
import Testimonials from './PagesLayout/Testimonials';
import Footer from './PagesLayout/Footer';



function App() {
  return (
    <div className='landingpage'>
      <Navbar/>
      <MainSection/>
      <ServicesSection/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
