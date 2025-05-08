import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { useAppContext } from '../../context/AppContext';

const CTASection: React.FC = () => {
  const { openContactForm } = useAppContext();

  return (
    <Section 
      bgColor="bg-primary-600" 
      className="text-white text-center"
      containerWidth="narrow"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-6">
          <ShieldCheck size={48} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Confiez vos vêtements à des experts
        </h2>
        
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Pressing Express, c'est la garantie d'un service d'excellence pour tous vos textiles. 
          Bénéficiez de notre expertise et de notre engagement pour la qualité.
        </p>
        
        <Button 
          size="lg" 
          onClick={openContactForm}
          className="text-primary-600 hover:bg-gray-100"
        >
          Demander un devis gratuit
        </Button>
        
        <p className="mt-4 text-sm opacity-75">
          Sans engagement - Réponse sous 24h
        </p>
      </motion.div>
    </Section>
  );
};

export default CTASection;