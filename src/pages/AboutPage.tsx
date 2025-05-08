import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Gem, Recycle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { team } from '../data/team';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck size={36} />,
      title: 'Qualité',
      description: 'Nous nous engageons à offrir un service irréprochable, avec une attention méticuleuse aux détails et une expertise inégalée dans le traitement des textiles.',
    },
    {
      icon: <Gem size={36} />,
      title: 'Excellence',
      description: 'Notre équipe vise l\'excellence dans chaque aspect de notre service, de l\'accueil client au processus de nettoyage et à la livraison finale.',
    },
    {
      icon: <Recycle size={36} />,
      title: 'Éco-responsabilité',
      description: 'Nous sommes engagés dans une démarche respectueuse de l\'environnement, utilisant des produits et des méthodes qui minimisent notre impact écologique.',
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
      title="À propos | Pressing Express"
      description="Découvrez l'histoire de Pressing Express à Brazzaville, notre équipe, nos valeurs et notre engagement pour la qualité et l'environnement."
    >
      {/* Hero Section */}
      <Section className="bg-primary-50 py-16 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="À propos de nous"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-900 opacity-60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            À propos de nous
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Découvrez notre histoire, notre équipe et nos valeurs
          </p>
        </div>
      </Section>
      
      {/* Our Story */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-primary-600">Notre histoire</h2>
            <p className="text-gray-700 mb-4">
              Fondé en 2010 par Pierre Durand, Pressing Express est né d'une vision simple mais ambitieuse : révolutionner le service de pressing en combinant qualité exceptionnelle et commodité pour le client.
            </p>
            <p className="text-gray-700 mb-4">
              Après plus de 15 ans d'expérience dans l'industrie du nettoyage textile, Pierre a identifié un manque de services haut de gamme accessibles au grand public. Il a décidé de créer un pressing qui ne ferait aucun compromis sur la qualité, tout en offrant des délais rapides et un service client irréprochable.
            </p>
            <p className="text-gray-700">
              Aujourd'hui, Pressing Express est devenu une référence dans le secteur, avec une équipe de professionnels passionnés qui partagent tous le même objectif : prendre soin de vos vêtements comme s'il s'agissait des leurs.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4761784/pexels-photo-4761784.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="L'équipe Pressing Express" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-4 rounded-lg shadow-lg">
              <p className="font-display text-xl">Depuis 2010</p>
              <p>Au service de votre élégance</p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Our Values */}
      <Section bgColor="bg-gray-50">
        <SectionTitle
          title="Nos valeurs"
          subtitle="Les principes qui guident notre service au quotidien"
          centered
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-primary-500 mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      
      {/* Our Team */}
      <Section bgColor="bg-white">
        <SectionTitle
          title="Notre équipe"
          subtitle="Des professionnels passionnés à votre service"
          centered
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {team.map((member) => (
            <motion.div 
              key={member.id}
              variants={item}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-secondary-500 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      
      {/* Certifications */}
      <Section bgColor="bg-primary-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-6 text-primary-600">Nos certifications</h2>
          <p className="text-gray-700 mb-8">
            Nous sommes fiers d'adhérer aux plus hauts standards de qualité et d'éco-responsabilité.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
            <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center h-32">
              <div className="text-primary-500 mb-2">
                <Recycle size={36} />
              </div>
              <p className="font-medium">Éco Label</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center h-32">
              <div className="text-primary-500 mb-2">
                <ShieldCheck size={36} />
              </div>
              <p className="font-medium">ISO 9001</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center h-32">
              <div className="text-primary-500 mb-2">
                <Gem size={36} />
              </div>
              <p className="font-medium">Qualité Pro</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center h-32">
              <div className="text-primary-500 mb-2">
                <ShieldCheck size={36} />
              </div>
              <p className="font-medium">AFNOR</p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutPage;