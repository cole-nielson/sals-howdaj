import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-desert-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/34ab7668-b0a7-4272-ba68-9ad5cb53bfc2.png"
              alt="Sal's Howdaj Logo"
              className="h-12 w-auto"
            />
            <span 
              className={`ml-2 font-playfair text-xl font-bold ${
                isScrolled || isMobileMenuOpen ? 'text-brand-black' : 'text-desert-white'
              }`}
            >
              Sal's Howdaj
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Menu', path: '/menu' },
              { name: 'About', path: '/about' },
              { name: 'Location', path: '/location' },
              { name: 'Contact', path: '/contact' },
              { name: 'Catering', path: '/catering' },
              { name: 'FAQ', path: '/faq' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium hover:text-desert-orange transition-colors ${
                  isScrolled ? 'text-brand-black' : 'text-desert-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-black"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} className={isScrolled ? 'text-brand-black' : 'text-desert-white'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-desert-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'About', path: '/about' },
                { name: 'Location', path: '/location' },
                { name: 'Contact', path: '/contact' },
                { name: 'Catering', path: '/catering' },
                { name: 'FAQ', path: '/faq' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-brand-black font-medium hover:text-desert-orange transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
