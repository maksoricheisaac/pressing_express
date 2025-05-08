import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Footer: React.FC = () => {
  const { openContactForm } = useAppContext();
  
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Pressing Express</h3>
            <p className="mb-4 text-gray-300">La qualité fait la différence. Service de pressing professionnel depuis 2010.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-secondary-400">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-secondary-400">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-secondary-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/tarifs" className="text-gray-300 hover:text-white transition-colors">Tarifs</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>



          {/* Nos agences */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nos agences</h3>
            <ul className="space-y-3 text-sm grid">
              <li>
                <span className="font-semibold">Site 1 :</span> Avenue Alphonse Fonder 925 - Rond Point la Coupole<br />
                <span className="flex items-center"><Phone size={16} className="mr-2" />05 364 74 74</span>
              </li>
              <li>
                <span className="font-semibold">Site 2 :</span> Avenue des 3 Martyrs 1622 - Plateaux des 15ans - Batignole<br />
                <span className="flex items-center"><Phone size={16} className="mr-2" />06 878 55 55</span>
              </li>
              <li>
                <span className="font-semibold">Site 3 :</span> Avenue 3 Martyrs Eglise Saint Esprit - Moungali<br />
                <span className="flex items-center"><Phone size={16} className="mr-2" />05 045 88 88</span>
              </li>
              <li>
                <span className="font-semibold">Site 4 :</span> Avenue 3 Martyrs 1265 Ouenze 753<br />
                <span className="flex items-center"><Phone size={16} className="mr-2" />06 433 33 49</span>
              </li>
            </ul>
            <button 
              onClick={openContactForm}
              className="mt-4 text-white bg-secondary-500 hover:bg-secondary-600 px-4 py-2 rounded-md transition-colors"
            >
              Nous contacter
            </button>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horaires d'ouverture</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Lundi - Vendredi</span>
                <span>8h - 19h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Samedi</span>
                <span>9h - 18h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Pressing Express. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link to="/cgv" className="hover:text-white transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;