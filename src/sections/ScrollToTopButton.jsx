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

  const buttonSizeMap = {
    sm: 40,
    md: 48,
    lg: 56
  };

  const iconSizeMap = {
    sm: 18,
    md: 20,
    lg: 24
  };

  const sizePx = buttonSizeMap[size];
  const iconSize = iconSizeMap[size];
  const radius = 22; // SVG circle radius
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (circumference * scrollProgress) / 100;
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
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);

  const handleScrollToTop = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed ${positionClass} z-[9999] transition-all duration-300 ease-in-out`}
      style={{ bottom: `${offset}px` }}
    >
      <div className="relative" style={{ width: sizePx, height: sizePx }}>
        <svg
          className="absolute top-0 left-0 -rotate-90"
          width={sizePx}
          height={sizePx}
          viewBox="0 0 50 50"
          style={{ pointerEvents: 'none' }}
        >
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
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
          className="w-full h-full flex items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={iconSize} />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
