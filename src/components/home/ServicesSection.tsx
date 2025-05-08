import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shirt, Timer, Diamond, Sofa, Bed, Scissors } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { services } from '../../data/services';

const ServicesSection: React.FC = () => {
  // Map service icons to Lucide components
  const getIcon = (iconName: string, size = 24) => {
    const icons: Record<string, React.ReactNode> = {
      Shirt: <Shirt size={size} />,
      Timer: <Timer size={size} />,
      Diamond: <Diamond size={size} />,
      Sofa: <Sofa size={size} />,
      Bed: <Bed size={size} />,
      Scissors: <Scissors size={size} />,
    };
    
    return icons[iconName] || null;
  };

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
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Section id="services" bgColor="bg-gray-50">
      <SectionTitle
        title="Nos Services"
        subtitle="Découvrez notre gamme complète de services personnalisés pour prendre soin de vos vêtements et textiles."
        centered
      />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={item}>
            <Card hoverEffect className="h-full flex flex-col">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="inline-flex p-3 rounded-lg bg-primary-100 text-primary-500 mr-4">
                    {getIcon(service.icon, 24)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-5 text-lg font-medium text-primary-600">{service.price}</div>
                
                <div className="mt-5">
                  <Link to={`/services#${service.id}`}>
                    <Button variant="outline" fullWidth>
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </div>
              
              {service.popular && (
                <div className="absolute top-0 right-0 bg-secondary-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase">
                  Populaire
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link to="/services">
          <Button size="lg">
            Voir tous nos services
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default ServicesSection;