import React from 'react';
import { Check } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import { pricingPlans } from '../data/pricing';
import { useAppContext } from '../context/AppContext';

const PricingPage: React.FC = () => {
  const { openContactForm } = useAppContext();

  return (
    <Layout
      title="Tarifs | Pressing Express"
      description="Découvrez nos forfaits mensuels Standard, Premium et Sur-mesure pour tous vos besoins de pressing et nettoyage à Brazzaville."
    >
      {/* Hero Section */}
      <Section className="bg-primary-50 py-16 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg"
            alt="Tarifs pressing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-900 opacity-60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Nos Tarifs
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Des formules adaptées à tous vos besoins, avec la qualité Pressing Express
          </p>
        </div>
      </Section>
      
      {/* Pricing Plans */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:transform hover:-translate-y-2 ${
                plan.recommended 
                  ? 'border-2 border-secondary-500 shadow-lg' 
                  : 'border border-gray-200 shadow'
              }`}
            >
              {plan.recommended && (
                <div className="bg-secondary-500 text-white py-2 text-center font-medium">
                  Recommandé
                </div>
              )}
              
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                  {plan.id !== 'business' && <span className="text-gray-500"> /mois</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} className="text-secondary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <Button
                  variant={plan.recommended ? 'primary' : 'outline'}
                  fullWidth
                  onClick={openContactForm}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
     
      {/* New Pricing Section */}
      <Section bgColor="bg-white">
        <SectionTitle title="Nos tarifs" subtitle="Découvrez nos prix transparents" centered />
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
        <thead className="bg-primary-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Article</th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Prix (FCFA)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Chemise</td>
            <td className="px-6 py-4 text-gray-700">2000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Chemise en soie</td>
            <td className="px-6 py-4 text-gray-700">3000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Chemise en lin</td>
            <td className="px-6 py-4 text-gray-700">2500</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Chemise sur ceintre</td>
            <td className="px-6 py-4 text-gray-700">2500</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Polo</td>
            <td className="px-6 py-4 text-gray-700">2000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Pontalon</td>
            <td className="px-6 py-4 text-gray-700">2500</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Costume 2 pièces</td>
            <td className="px-6 py-4 text-gray-700">5000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Bazin 2 pièces</td>
            <td className="px-6 py-4 text-gray-700">4000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Robe simple</td>
            <td className="px-6 py-4 text-gray-700">4000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Basket</td>
            <td className="px-6 py-4 text-gray-700">3500</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Blazer</td>
            <td className="px-6 py-4 text-gray-700">3000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Drap + 2 taies</td>
            <td className="px-6 py-4 text-gray-700">4000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Double drap</td>
            <td className="px-6 py-4 text-gray-700">6000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Pull</td>
            <td className="px-6 py-4 text-gray-700">2500</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Survêtement</td>
            <td className="px-6 py-4 text-gray-700">4500</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Robe stain</td>
            <td className="px-6 py-4 text-gray-700">6000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Singlet</td>
            <td className="px-6 py-4 text-gray-700">1500</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Chaussette</td>
            <td className="px-6 py-4 text-gray-700">500</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Casquette</td>
            <td className="px-6 py-4 text-gray-700">1000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Basket en din</td>
            <td className="px-6 py-4 text-gray-700">5000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Combinaison</td>
            <td className="px-6 py-4 text-gray-700">6000</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-700">Ensemble en lin</td>
            <td className="px-6 py-4 text-gray-700">5000</td>
          </tr>
        </tbody>
          </table>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section bgColor="bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title="Questions fréquentes sur nos tarifs"
            centered
          />
          
          <div className="bg-gray-50 rounded-lg shadow-sm p-6 divide-y divide-gray-200">
            <div className="py-4">
              <h3 className="text-lg font-medium text-gray-900">Comment fonctionnent les forfaits mensuels ?</h3>
              <p className="mt-2 text-gray-600">Nos forfaits mensuels vous donnent accès à un nombre de pièces défini par mois. Vous payez un montant fixe et pouvez apporter vos vêtements quand vous le souhaitez. Les pièces non utilisées peuvent être partiellement reportées au mois suivant.</p>
            </div>
            
            <div className="py-4">
              <h3 className="text-lg font-medium text-gray-900">Est-ce que je peux annuler mon forfait à tout moment ?</h3>
              <p className="mt-2 text-gray-600">Oui, nos forfaits sont sans engagement de durée. Vous pouvez les annuler à tout moment avec un préavis de 30 jours.</p>
            </div>
            
            <div className="py-4">
              <h3 className="text-lg font-medium text-gray-900">Comment sont calculés les prix pour le service sur-mesure ?</h3>
              <p className="mt-2 text-gray-600">Les prix de notre service sur-mesure sont calculés en fonction de vos besoins spécifiques : volume, fréquence, types de vêtements, délais et services additionnels. Contactez-nous pour obtenir un devis personnalisé.</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-lg mb-4">Besoin d'un tarif personnalisé ?</p>
            <Button size="lg" onClick={openContactForm}>
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default PricingPage;