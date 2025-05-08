import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { useAppContext } from '../../context/AppContext';

const Hero: React.FC = () => {
  const { openContactForm } = useAppContext();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1280')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-primary-900 bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Pressing Express
            </h1>
            <p className="text-xl md:text-2xl text-white mb-2">La qualité fait la différence</p>
            <p className="text-gray-200 text-lg mb-8 max-w-lg">
              Service de pressing professionnel qui prend soin de vos vêtements avec toute l'attention qu'ils méritent.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={openContactForm}
              >
                Demander un devis gratuit
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary-800"
                onClick={scrollToServices}
              >
                Découvrir nos services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToServices}
      >
        <ChevronDown className="text-white" size={30} />
      </motion.div>
    </section>
  );
};

export default Hero;