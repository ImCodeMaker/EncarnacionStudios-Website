import MainSection from './Components/MainSection';
import Navbar from './Components/Navbar';
import ServicesSection from './Components/ServicesSection';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className='landingpage'>
      <Navbar/>
      <MainSection/>
      <ServicesSection/>
      <Testimonials/>
    </div>
  );
}

export default App;
