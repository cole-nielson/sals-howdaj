import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  // Determine if the light mode (white text) should be active
  const lightMode = pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
    { name: 'Catering', path: '/catering' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center"
      initial={{ backgroundColor: 'rgba(255, 255, 255, 0)', backdropFilter: 'blur(0px)', boxShadow: 'none' }}
      animate={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: isScrolled ? 'blur(4px)' : 'blur(0px)',
        boxShadow: isScrolled ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : 'none',
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
            <img
              src="/lovable-uploads/34ab7668-b0a7-4272-ba68-9ad5cb53bfc2.png"
              alt="Sal's Howdaj Logo"
              className="h-8 w-auto"
            />
            <span
              className={clsx(
                'ml-3 font-playfair text-xl font-bold transition-colors duration-200',
                lightMode ? 'text-white' : 'text-brand-black'
              )}
            >
              Sal's Howdaj
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={clsx(
                    'font-medium transition-colors duration-200',
                    'hover:text-brand-red focus:text-brand-red',
                    {
                      'font-semibold text-brand-red': isActive,
                      'text-white': !isActive && lightMode,
                      'text-brand-black': !isActive && !lightMode,
                    }
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <button
            className={clsx(
              'md:hidden z-50 transition-colors duration-200',
              lightMode ? 'text-white' : 'text-brand-black'
            )}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg absolute top-0 left-0 right-0 pt-[72px] h-screen"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navLinks.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={clsx(
                        'text-lg font-medium text-brand-black transition-colors duration-200',
                        'hover:text-brand-red focus:text-brand-red',
                        { 'font-semibold text-brand-red': isActive }
                      )}
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
