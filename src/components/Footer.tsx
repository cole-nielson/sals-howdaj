import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-black text-desert-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/34ab7668-b0a7-4272-ba68-9ad5cb53bfc2.png"
                alt="Sal's Howdaj Logo"
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 text-desert-tan">
              Authentic Middle Eastern cuisine served with love from our food truck in Boise, Idaho.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Menu', path: '/menu' },
                { name: 'About Us', path: '/about' },
                { name: 'Find Us', path: '/location' },
                { name: 'Catering', path: '/catering' },
                { name: 'FAQ', path: '/faq' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-desert-tan hover:text-desert-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-desert-orange">Phone:</span>
                <a 
                  href="tel:+12085551234" 
                  className="ml-2 text-desert-tan hover:text-desert-orange transition-colors"
                >
                  (208) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-desert-orange">Email:</span>
                <a 
                  href="mailto:info@salshowdaj.com" 
                  className="ml-2 text-desert-tan hover:text-desert-orange transition-colors"
                >
                  info@salshowdaj.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-desert-tan hover:text-desert-orange transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-desert-tan hover:text-desert-orange transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-desert-tan hover:text-desert-orange transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to Our Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-3 py-2 rounded-l-lg focus:outline-none text-brand-black"
                />
                <button
                  type="submit"
                  className="bg-desert-orange text-white px-3 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-desert-tan">
            &copy; {currentYear} Sal's Howdaj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
