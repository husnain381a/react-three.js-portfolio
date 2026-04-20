import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './sections/NavBar';
import NavBar2 from './sections/NavBar2';

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
import ServicePlans from './components/ServicePlans';
import NotFound from './components/NotFound';
import LogoPreloader from './components/LogoPreloader';

function App() {
  const isMobile = useIsMobile();
  const [pageLoaded, setPageLoaded] = useState(() => document.readyState === 'complete');
  const [hasPreloaderLooped, setHasPreloaderLooped] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    const handleLoaded = () => {
      setPageLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleLoaded();
      return undefined;
    }

    window.addEventListener('load', handleLoaded);

    return () => window.removeEventListener('load', handleLoaded);
  }, []);

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

  const isLoading = !pageLoaded || !hasPreloaderLooped;

  if (isLoading) {
    return <LogoPreloader onCycleComplete={() => setHasPreloaderLooped(true)} />;
  }

  return (
    <Router>
      {isMobile && showPopup && !hasSeenPopup && (
        <MobilePopup onClose={handleClosePopup} />
      )}

      <main className='max-w-7xl mx-auto'>
      
        {/* Use NavBar2 ONLY on /pricing */}
        {window.location.pathname === "/service-plans" ? <NavBar2 /> : <NavBar />}

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Education />
              <Experience />
              <Projects />
              <Contact />
            </>
          } />

          <Route path="/service-plans" element={<ServicePlans/>} />
          <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer />
        <ScrollToTopButton />
      </main>
    </Router>
  );
}

export default App;
