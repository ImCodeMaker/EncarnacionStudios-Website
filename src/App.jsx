import FAQ from './Components/FAQ';
import MainSection from './Components/MainSection';
import Navbar from './Components/Navbar';
import ServicesSection from './Components/ServicesSection';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

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
