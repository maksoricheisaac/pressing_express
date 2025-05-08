import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { useAppContext } from '../context/AppContext';

const ContactPage: React.FC = () => {
  const { openContactForm } = useAppContext();

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Téléphone',
      content: '01 23 45 67 89',
      link: 'tel:+33123456789',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'contact@pressing-express.fr',
      link: 'mailto:contact@pressing-express.fr',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Adresse',
      content: '123 Rue du Commerce, 75015 Paris',
      link: 'https://maps.google.com/?q=123+Rue+du+Commerce+75015+Paris',
    },
    {
      icon: <Clock size={24} />,
      title: 'Horaires',
      content: 'Lun-Ven: 8h-19h | Sam: 9h-18h',
      link: null,
    },
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
    <Layout
      title="Contact | Pressing Express"
      description="Contactez Pressing Express à Brazzaville pour toute question ou demande de devis. Notre équipe vous répondra dans les plus brefs délais."
    >
      {/* Hero Section */}
      <Section className="bg-primary-50 py-16 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="Contactez-nous"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-900 opacity-60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </Section>
      
      {/* Contact Info */}
      <Section bgColor="bg-white">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-gray-50 p-6 rounded-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-500 mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              {info.link ? (
                <a 
                  href={info.link} 
                  className="text-gray-700 hover:text-primary-500 transition-colors"
                  target={info.title === 'Adresse' ? '_blank' : undefined}
                  rel={info.title === 'Adresse' ? 'noopener noreferrer' : undefined}
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-700">{info.content}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* NOUVELLE SECTION : Nos agences */}
        <div className="mt-12">
          <SectionTitle title="Nos agences" subtitle="Retrouvez-nous dans nos différents sites à Brazzaville" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow text-gray-800">
              <div className="font-bold mb-1">Site 1</div>
              <div>Avenue Alphonse Fonder 925 - Rond Point la Coupole</div>
              <div className="text-primary-600 font-semibold mt-1">05 364 74 74</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow text-gray-800">
              <div className="font-bold mb-1">Site 2</div>
              <div>Avenue des 3 Martyrs 1622 - Plateaux des 15ans - Batignole</div>
              <div className="text-primary-600 font-semibold mt-1">06 878 55 55</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow text-gray-800">
              <div className="font-bold mb-1">Site 3</div>
              <div>Avenue 3 Martyrs Eglise Saint Esprit - Moungali</div>
              <div className="text-primary-600 font-semibold mt-1">05 045 88 88</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow text-gray-800">
              <div className="font-bold mb-1">Site 4</div>
              <div>Avenue 3 Martyrs 1265 Ouenze 753</div>
              <div className="text-primary-600 font-semibold mt-1">06 433 33 49</div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Map and Contact Form */}
      <Section bgColor="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-md h-100 flex">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.4763130618997!2d2.2963728!3d48.8447983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6703a93c00001%3A0x799eca8c1cf45f32!2s123%20Rue%20du%20Commerce%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1621936292365!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Carte Pressing Express"
              aria-label="Carte montrant l'emplacement de Pressing Express"
            ></iframe>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md h-100 flex flex-col justify-center">
            <SectionTitle
              title="Envoyez-nous un message"
              subtitle="Nous vous répondrons dans les plus brefs délais"
            />
            
            <form className="space-y-6 flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <div>
                <Button type="submit" fullWidth size="lg">
                  Envoyer
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
      
      {/* FAQ Preview */}
      <Section bgColor="bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title="Questions fréquentes"
            subtitle="Voici les questions les plus posées par nos clients"
            centered
          />
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Quels sont vos délais de traitement ?</h3>
              <p className="text-gray-700">Notre délai standard est de 48h. Pour le service express, vos vêtements sont prêts en 4h maximum.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Proposez-vous un service de livraison ?</h3>
              <p className="text-gray-700">Oui, nous proposons un service de livraison gratuit pour toute commande supérieure à 50€ dans un rayon de 10km.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Comment fonctionnent vos forfaits mensuels ?</h3>
              <p className="text-gray-700">Nos forfaits mensuels vous permettent de bénéficier d'un tarif préférentiel pour un volume défini de vêtements.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button onClick={openContactForm}>
              Voir toutes les questions
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactPage;