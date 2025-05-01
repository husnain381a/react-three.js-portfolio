import React, { useState } from 'react';
import { navLinks } from '../constants/index.js';
import Button from '../components/Button.jsx';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavItems = () => (
    <ul className="flex flex-col sm:flex-row gap-5 sm:gap-8 text-white font-medium">
      {navLinks.map((item) => (
        <li key={item.id}>
          <a href={item.href} className="hover:text-neutral-400 transition-colors duration-300">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <a href="/" className="text-white font-bold text-xl hover:text-neutral-400 transition-colors duration-300">
            <span>{"< Husnain"}</span>
            <span>{" Mazhar / >"}</span>
          </a>

          {/* Hamburger (Mobile) */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="sm:hidden text-white hover:text-neutral-400 transition duration-300"
          >
            <img src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          {/* Desktop Nav + Resume */}
          <div className="hidden sm:flex items-center gap-6">
            <nav>
              <NavItems />
            </nav>
            <a href="/assets/Husnain_Resume.pdf" download>
              <Button name="Download Resume" isBeam containerClass="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="p-4 sm:hidden bg-black/95 border-t border-gray-700">
          <NavItems />
          <a href="/assets/Husnain_Resume.pdf" download className="block mt-4">
            <Button name="Download Resume" isBeam containerClass="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
