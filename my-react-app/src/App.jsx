import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import OurProducts from './Pages/OurProducts/OurProducts';
import Contactus from './Pages/Contactus/Contactus';
import './App.css';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -50,
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 30,
  damping: 20,
  duration: 0.8,
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/products" element={<FullScreenWrapper><OurProducts /></FullScreenWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contactus /></PageWrapper>} />
      </Routes>
    </Router>
  );
}

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/products'; // Hide navbar on /products route

  return (
    <>
      {showNavbar && <Navbar />}
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </>
  );
};

const FullScreenWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    style={{ height: '100vh', width: '100vw' }}
  >
    {children}
  </motion.div>
);

export default App;
