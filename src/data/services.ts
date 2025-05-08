import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'nettoyage-standard',
    title: 'Nettoyage Standard',
    description: 'Un nettoyage professionnel pour vos vêtements du quotidien avec des produits de qualité supérieure.',
    icon: 'Shirt',
    features: [
      'Traitement délicat adapté à chaque tissu',
      'Détachage professionnel',
      'Repassage de qualité',
      'Emballage protecteur',
      'Livraison possible sous 48h'
    ],
    price: 'À partir de 3 000 FCFA'
  },
  {
    id: 'nettoyage-express',
    title: 'Service Express',
    description: 'Besoin urgent ? Notre service express garantit un traitement prioritaire de vos vêtements.',
    icon: 'Timer',
    features: [
      'Traitement en 4 heures maximum',
      'Service prioritaire',
      'Mêmes standards de qualité',
      'Retrait en boutique',
      'Livraison express disponible'
    ],
    price: 'À partir de 4 500 FCFA',
    popular: true
  },
  {
    id: 'pressing-luxe',
    title: 'Pressing Luxe',
    description: 'Un service premium pour vos vêtements délicats et de haute valeur avec une attention particulière aux détails.',
    icon: 'Diamond',
    features: [
      'Analyse préalable de chaque pièce',
      'Traitement adapté aux textiles de luxe',
      'Détachage haute précision',
      'Repassage artisanal',
      'Emballage premium et conseils d\'entretien'
    ],
    price: 'À partir de 6 500 FCFA'
  },
  {
    id: 'ameublement',
    title: 'Ameublement',
    description: 'Redonnez vie à vos textiles d\'ameublement avec notre service spécialisé pour rideaux, housses et tapis.',
    icon: 'Sofa',
    features: [
      'Prise de mesure à domicile',
      'Décrochage et raccrochage de rideaux',
      'Nettoyage en profondeur',
      'Traitement anti-acariens',
      'Repassage et pliage parfait'
    ],
    price: 'Sur devis'
  },
  {
    id: 'blanchisserie',
    title: 'Blanchisserie',
    description: 'Service complet pour votre linge de maison : draps, serviettes, nappes et autres textiles.',
    icon: 'Bed',
    features: [
      'Lavage haute température',
      'Produits hypoallergéniques disponibles',
      'Séchage adapté',
      'Pliage précis',
      'Formules au kilo disponibles'
    ],
    price: 'À partir de 2 500 FCFA/kg'
  },
  {
    id: 'retouches',
    title: 'Retouches',
    description: 'Ajustements et réparations réalisés par nos couturiers expérimentés pour un résultat impeccable.',
    icon: 'Scissors',
    features: [
      'Ourlets et ajustements',
      'Changement de fermetures',
      'Reprise de coutures',
      'Conseils personnalisés',
      'Service express disponible'
    ],
    price: 'À partir de 5 000 FCFA'
  }
];