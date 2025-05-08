import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { faqs } from '../data/faqs';
import { useAppContext } from '../context/AppContext';

const FAQPage: React.FC = () => {
  const { openContactForm } = useAppContext();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Group FAQs by category
  const groupedFaqs: Record<string, typeof faqs> = {};
  faqs.forEach((faq) => {
    if (!groupedFaqs[faq.category]) {
      groupedFaqs[faq.category] = [];
    }
    groupedFaqs[faq.category].push(faq);
  });

  // Get unique categories
  const categories = Object.keys(groupedFaqs);

  return (
    <Layout
      title="FAQ | Pressing Express"
      description="Trouvez les réponses à toutes vos questions sur nos services de pressing, nos tarifs, nos délais et notre processus à Brazzaville."
    >
      {/* JSON-LD Schema for FAQs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
      
      {/* Hero Section */}
      <Section className="bg-primary-50 py-16 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
            alt="Foire aux questions"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-900 opacity-60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Foire Aux Questions
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Trouvez les réponses à vos questions les plus fréquentes
          </p>
        </div>
      </Section>
      
      {/* FAQs by Category */}
      <Section bgColor="bg-white">
        <div className="max-w-3xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-6 text-primary-600 capitalize">
                {category === 'délais' ? 'Délais de service' : 
                 category === 'livraison' ? 'Livraison' :
                 category === 'paiement' ? 'Modes de paiement' :
                 category === 'services' ? 'Nos services' :
                 category === 'tarifs' ? 'Tarification' :
                 category === 'garantie' ? 'Garanties' :
                 category === 'environnement' ? 'Environnement' : category}
              </h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {groupedFaqs[category].map((faq) => (
                  <div 
                    key={faq.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className={`w-full text-left p-4 flex justify-between items-center focus:outline-none ${
                        openItems[faq.id] ? 'bg-primary-50' : 'bg-white'
                      }`}
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {openItems[faq.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    
                    {openItems[faq.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 bg-white border-t border-gray-200"
                      >
                        <p className="text-gray-700">{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
          
          <div className="mt-10 text-center p-6 bg-primary-50 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Vous n'avez pas trouvé votre réponse ?</h3>
            <p className="text-gray-700 mb-4">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
            <Button onClick={openContactForm}>
              Contactez-nous
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default FAQPage;