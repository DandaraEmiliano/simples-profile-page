
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-semibold text-portfolio-primary">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#resume" className="nav-link">
              Resume
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-portfolio-dark focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <a 
            href="#projects" 
            className="block nav-link py-2"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#resume" 
            className="block nav-link py-2"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <a 
            href="#contact" 
            className="block nav-link py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
