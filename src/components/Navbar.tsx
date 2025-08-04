import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

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
              src="/images-optimized/branding/logo.webp"
              alt="Sal's Howdaj Logo"
              className="h-12 w-auto"
            />
            <span
              className={clsx(
                'ml-2 font-playfair text-xl font-bold transition-colors duration-150',
                {
                  'text-white': pathname === '/' && !isScrolled,
                  'text-brand-black': pathname !== '/' || isScrolled,
                  '!text-brand-black': isMobileMenuOpen 
                }
              )}
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
            ].map((item) => {
               const baseLinkClasses = "font-medium transition-colors duration-150 hover:text-brand-red";
               const isLightMode = pathname === '/' && !isScrolled;
               const isActive = pathname === item.path; 
               const linkClasses = clsx(
                 baseLinkClasses,
                 {
                   'text-white': isLightMode && !isActive,
                   'text-brand-black': !isLightMode && !isActive,
                   'text-brand-red font-semibold': isActive,
                 }
               );

               return (
                 <Link
                   key={item.name}
                   to={item.path}
                   className={linkClasses}
                 >
                   {item.name}
                 </Link>
               );
             })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={clsx(
              'md:hidden transition-colors duration-150',
              {
                'text-white': pathname === '/' && !isScrolled,
                'text-brand-black': pathname !== '/' || isScrolled,
              }
            )}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
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
                  className={clsx(
                    'text-brand-black font-medium hover:text-brand-red transition-colors',
                    { 'font-semibold text-brand-red': pathname === item.path }
                  )}
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
