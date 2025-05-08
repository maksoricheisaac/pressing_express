import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'standard',
    title: 'Standard',
    price: '15 000 FCFA',
    description: 'Idéal pour les besoins réguliers, notre forfait économique pour un service de qualité.',
    features: [
      '10 pièces de vêtements par mois',
      'Service sous 48h',
      'Livraison gratuite (>25 000 FCFA)',
      'Détachage simple inclus',
      'Accès à l\'application mobile'
    ],
    cta: 'Choisir Standard'
  },
  {
    id: 'premium',
    title: 'Premium',
    price: '30 000 FCFA',
    description: 'Notre offre la plus populaire avec un excellent rapport qualité-prix et des services supplémentaires.',
    features: [
      '20 pièces de vêtements par mois',
      'Service Express (24h) inclus',
      'Livraison gratuite illimitée',
      'Traitements spéciaux inclus',
      'Conseils d\'entretien personnalisés',
      'Accès prioritaire'
    ],
    recommended: true,
    cta: 'Choisir Premium'
  },
  {
    id: 'business',
    title: 'Sur-mesure',
    price: 'Sur devis',
    description: 'Solution personnalisée pour les professionnels et les besoins spécifiques.',
    features: [
      'Volume illimité',
      'Service sur rendez-vous',
      'Enlèvement et livraison sur site',
      'Service d\'urgence disponible',
      'Conseiller dédié',
      'Facturation mensuelle'
    ],
    cta: 'Demander un devis'
  }
];