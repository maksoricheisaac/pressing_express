import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactForm from '../ui/ContactForm';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Pressing Express - La qualité fait la différence',
  description = 'Service de pressing et nettoyage professionnel de qualité. Nettoyage à sec, blanchisserie, retouches et ameublement.' 
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ContactForm />
      </div>
    </>
  );
};

export default Layout;