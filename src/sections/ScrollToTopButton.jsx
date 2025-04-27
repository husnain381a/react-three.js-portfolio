import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = ({
  showAfter = 300,
  size = 'md',
  position = 'right',
  offset = 24
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const buttonSize = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-14 w-14'
  }[size];

  const iconSize = {
    sm: 18,
    md: 20,
    lg: 24
  }[size];

  const positionClass = position === 'left' ? 'left-4' : 'right-4';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - winHeight;
      const scrolled = (scrollTop / totalScroll) * 100;

      setScrollProgress(Math.min(scrolled, 100));
      setIsVisible(scrollTop > showAfter);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);
 //change
  const handleScrollToTop = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed ${positionClass} z-50 transition-all duration-300 ease-in-out`}
      style={{ bottom: `${offset}px` }}
    >
      <div className="relative">
        <svg
          className="absolute top-0 left-0 -rotate-90"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeDasharray="289.03"
            strokeDashoffset={289.03 - (289.03 * scrollProgress) / 100}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>

        <button
          onClick={handleScrollToTop}
          className={`${buttonSize} flex items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          aria-label="Scroll to top"
        >
          <ChevronUp size={iconSize} />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
