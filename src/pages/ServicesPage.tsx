import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shirt, Timer, Diamond, Sofa, Bed, Scissors } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { services } from '../data/services';
import { useAppContext } from '../context/AppContext';

const ServicesPage: React.FC = () => {
  const { openContactForm } = useAppContext();
  
  // Map service icons to Lucide components
  const getIcon = (iconName: string, size = 48) => {
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
        staggerChildren: 0.15
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
    <Layout 
      title="Nos Services | Pressing Express"
      description="Découvrez tous nos services de pressing professionnel à Brazzaville : nettoyage standard, express, luxe, ameublement, blanchisserie et retouches."
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": service.title,
              "description": service.description,
              "url": `https://www.pressing-express.fr/services#${service.id}`
            }))
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <Section className="bg-primary-50 py-16 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3771111/pexels-photo-3771111.jpeg"
            alt="Services de pressing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-900 opacity-60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Nos Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Des services de qualité pour tous vos besoins en nettoyage et entretien de textiles
          </p>
        </div>
      </Section>
      
      {/* Services Detail Section */}
      <Section bgColor="bg-white">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={item}
              className="scroll-mt-24"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                {/* Icon & Title for Mobile */}
                <div className="md:hidden flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4 text-primary-500">
                    {getIcon(service.icon, 24)}
                  </div>
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                </div>
                
                {/* Icon Column */}
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <div className="bg-primary-100 p-6 rounded-xl text-primary-500">
                    {getIcon(service.icon, 48)}
                  </div>
                </div>
                
                {/* Content Column */}
                <div className="md:col-span-4">
                  {/* Title for Desktop */}
                  <h2 className="hidden md:block text-3xl font-semibold mb-4">{service.title}</h2>
                  
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Ce que nous proposons :</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="text-xl font-semibold text-primary-600">
                      {service.price}
                    </div>
                    
                    <Button onClick={openContactForm}>
                      Obtenir un devis pour ce service
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Separator */}
              {service.id !== services[services.length - 1].id && (
                <div className="border-b border-gray-200 mt-12"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>
      
      {/* FAQ Section */}
      <Section bgColor="bg-gray-50">
        <SectionTitle
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir sur nos services de nettoyage"
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 divide-y divide-gray-200">
            <div className="py-4">
              <h3 className="text-lg font-medium text-gray-900">Combien de temps prend le nettoyage de mes vêtements ?</h3>
              <p className="mt-2 text-gray-600">Notre délai standard est de 48h. Pour le service express, vos vêtements sont prêts en 4h maximum. Les délais peuvent varier selon le type de textile et le traitement nécessaire.</p>
            </div>
            
            <div className="py-4">
              <h3 className="text-lg font-medium text-gray-900">Proposez-vous un service de livraison ?</h3>
              <p className="mt-2 text-gray-600">Oui, nous proposons un service de livraison gratuit pour toute commande supérieure à 50€ dans un rayon de 10km autour de notre boutique.</p>
            </div>
            
            <div className="py-4">
              <h3 className="text-lg font-medium text-gray-900">Comment sont traités mes vêtements délicats ?</h3>
              <p className="mt-2 text-gray-600">Tous nos vêtements délicats sont traités selon un protocole spécifique. Nous analysons d'abord le textile et la tâche, puis appliquons un traitement adapté pour préserver la qualité du vêtement.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="mb-4">Vous avez d'autres questions ?</p>
            <Button onClick={openContactForm}>Contactez-nous</Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ServicesPage;