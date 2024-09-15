import { useRef } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Contactus from './Pages/Contactus/Contactus';
import About from './Pages/About/About';
import './App.css';
import OurProducts from './Pages/OurProducts/OurProducts.jsx';

function App() {
  const homeRef = useRef(null);
  const contactusRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null); // Ref for OurProducts

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        onNavigateHome={() => scrollToSection(homeRef)}
        onNavigateContact={() => scrollToSection(contactusRef)}
        onNavigateAbout={() => scrollToSection(aboutRef)}
        onNavigateProducts={() => scrollToSection(productsRef)} // Add navigation for OurProducts
      />

      <div ref={homeRef}>
        <Home scrollToProducts={() => scrollToSection(productsRef)} /> {/* Pass scroll function */}
      </div>
      <div ref={productsRef}> {/* Ref for OurProducts */}
        <OurProducts />
      </div>
      <div ref={contactusRef}>
        <Contactus />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
    </>
  );
}

export default App;
