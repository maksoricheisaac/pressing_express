import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import { useAppContext } from '../../context/AppContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openContactForm } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Tarifs', path: '/tarifs' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-primary-500 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
          <div className="flex items-center space-x-4 text-sm">
            <a href="tel:+24206123456" className="flex items-center hover:text-secondary-300">
              <Phone size={16} className="mr-1" />
              <span>+242 06 123 4567</span>
            </a>
            <span className="text-gray-400">|</span>
            <a href="mailto:contact@pressing-express.cg" className="flex items-center hover:text-secondary-300">
              <Mail size={16} className="mr-1" />
              <span>contact@pressing-express.cg</span>
            </a>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>123 Avenue de la Paix, Brazzaville</span>
            </span>
            <span className="text-gray-400">|</span>
            <span>Lun-Sam: 8h-19h</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white md:bg-transparent py-4'
        } sticky top-0 z-40`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-xl font-display font-bold text-primary-500">
              Pressing Express
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium hover:text-secondary-500 transition-colors ${
                  location.pathname === link.path 
                    ? 'text-secondary-500 border-b-2 border-secondary-500' 
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button onClick={openContactForm}>Demander un devis</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all transform duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 font-medium hover:text-secondary-500 transition-colors ${
                  location.pathname === link.path 
                    ? 'text-secondary-500' 
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button fullWidth onClick={openContactForm}>
                Demander un devis
              </Button>
            </div>
            
            {/* Mobile contact info */}
            <div className="pt-4 border-t border-gray-200 mt-4 space-y-2 text-sm">
              <a href="tel:+24206123456" className="flex items-center text-gray-600 py-1">
                <Phone size={16} className="mr-2" />
                <span>+242 06 123 4567</span>
              </a>
              <a href="mailto:contact@pressing-express.cg" className="flex items-center text-gray-600 py-1">
                <Mail size={16} className="mr-2" />
                <span>contact@pressing-express.cg</span>
              </a>
              <div className="flex items-center text-gray-600 py-1">
                <MapPin size={16} className="mr-2" />
                <span>123 Avenue de la Paix, Brazzaville</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;