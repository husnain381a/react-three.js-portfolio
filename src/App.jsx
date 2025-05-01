import React, { useState, useEffect } from 'react';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollToTopButton from './sections/ScrollToTopButton';
import Experience from './sections/Experience';
import Education from './sections/Education';
import MobilePopup from './sections/MobilePopup';
import { useIsMobile } from './utils/DeviceInfo';

function App() {
  const isMobile = useIsMobile();
  const [showPopup, setShowPopup] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopupSession = sessionStorage.getItem('hasSeenPopup');
    
    if (isMobile && !hasSeenPopupSession) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setHasSeenPopup(true);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  return (
    <>
      <main className='max-w-7xl mx-auto'>
        <NavBar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </main>
      
      {isMobile && showPopup && !hasSeenPopup && (
        <MobilePopup onClose={handleClosePopup} />
      )}
    </>
  );
}

export default App;