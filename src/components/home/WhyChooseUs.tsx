import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Recycle, Users } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award size={36} />,
      title: 'Excellence garantie',
      description: 'Plus de 10 ans d\'expertise dans le nettoyage de textiles de qualité.',
      stat: '+500 clients satisfaits'
    },
    {
      icon: <Clock size={36} />,
      title: 'Service rapide',
      description: 'Service express disponible en 4h pour les urgences.',
      stat: '98% de livraisons à temps'
    },
    {
      icon: <Recycle size={36} />,
      title: 'Éco-responsable',
      description: 'Utilisation de produits et méthodes respectueux de l\'environnement.',
      stat: '-40% d\'impact environnemental'
    },
    {
      icon: <Users size={36} />,
      title: 'Service personnalisé',
      description: 'Traitement adapté à chaque type de textile et à vos besoins spécifiques.',
      stat: '100% de solutions sur mesure'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <Section bgColor="bg-primary-50">
      <SectionTitle
        title="Pourquoi nous choisir ?"
        subtitle="Chez Pressing Express, nous nous démarquons par la qualité de notre service et notre attention aux détails."
        centered
      />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div className="text-primary-500 mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <div className="text-secondary-500 font-semibold">{feature.stat}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default WhyChooseUs;