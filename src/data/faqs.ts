import { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Quels sont vos délais de traitement standards ?',
    answer: 'Notre délai standard est de 48 heures. Nous proposons également un service express en 4 heures et un service jour même selon l\'heure de dépôt. Pour les articles délicats nécessitant un traitement spécial, le délai peut s\'étendre jusqu\'à 72 heures.',
    category: 'délais'
  },
  {
    id: '2',
    question: 'Comment fonctionne votre service de livraison ?',
    answer: 'Nous offrons un service de livraison gratuit pour toute commande supérieure à 50€ dans un rayon de 10km autour de notre boutique. La livraison est disponible du lundi au samedi de 10h à 19h. Vous pouvez choisir votre créneau horaire lors de la commande ou nous contacter pour organiser une livraison sur mesure.',
    category: 'livraison'
  },
  {
    id: '3',
    question: 'Quelles méthodes de paiement acceptez-vous ?',
    answer: 'Nous acceptons les paiements par carte bancaire, espèces, et virement bancaire. Les clients réguliers peuvent également opter pour une facturation mensuelle. Pour les entreprises, nous proposons des solutions de paiement adaptées avec facturation détaillée.',
    category: 'paiement'
  },
  {
    id: '4',
    question: 'Comment prenez-vous en charge les taches difficiles ?',
    answer: 'Notre procédé de détachage se fait en plusieurs étapes : analyse de la tache et du textile, pré-traitement spécifique, nettoyage adapté, et contrôle qualité. Nous utilisons des produits professionnels respectueux de l\'environnement et adaptés à chaque type de textile et de tache.',
    category: 'services'
  },
  {
    id: '5',
    question: 'Proposez-vous un service pour les textiles délicats comme la soie ou le cachemire ?',
    answer: 'Absolument ! Notre service "Pressing Luxe" est spécialement conçu pour les textiles délicats. Nos techniciens sont formés aux techniques spécifiques pour la soie, le cachemire, la laine fine et autres matières précieuses, garantissant un traitement respectueux de vos pièces les plus précieuses.',
    category: 'services'
  },
  {
    id: '6',
    question: 'Comment fonctionnent vos forfaits mensuels ?',
    answer: 'Nos forfaits mensuels vous permettent de bénéficier d\'un tarif préférentiel pour un volume défini de vêtements. Vous payez un montant fixe chaque mois et apportez vos vêtements quand vous le souhaitez. Les pièces non utilisées dans le mois peuvent être reportées au mois suivant dans la limite de 30% du forfait.',
    category: 'tarifs'
  },
  {
    id: '7',
    question: 'Que faire en cas de problème avec un vêtement ?',
    answer: 'Votre satisfaction est notre priorité. En cas de problème, contactez-nous dans les 48h suivant la réception. Un responsable examinera votre article et proposera une solution adaptée. Nous disposons d\'une assurance professionnelle couvrant d\'éventuels dommages, bien que ceux-ci soient extrêmement rares grâce à nos procédures de contrôle qualité.',
    category: 'garantie'
  },
  {
    id: '8',
    question: 'Vos produits sont-ils écologiques ?',
    answer: 'Nous sommes engagés dans une démarche écoresponsable. Nos produits de nettoyage sont biodégradables et nos procédés optimisés pour réduire la consommation d\'eau et d\'énergie. Nous utilisons des emballages recyclables et proposons même une option "zéro plastique" pour nos clients sensibles à l\'impact environnemental.',
    category: 'environnement'
  },
  {
    id: '9',
    question: 'Où trouver vos agences ?',
    answer: `
      <ul>
        <li><strong>Site 1 :</strong> Avenue Alphonse Fonder 925 - Rond Point la Coupole, Tel : 05 364 74 74</li>
        <li><strong>Site 2 :</strong> Avenue des 3 Martyrs 1622 - Plateaux des 15ans - Batignole, Tel : 06 878 55 55</li>
        <li><strong>Site 3 :</strong> Avenue 3 Martyrs Eglise Saint Esprit - Moungali, Tel : 05 045 88 88</li>
        <li><strong>Site 4 :</strong> Avenue 3 Martyrs 1265 Ouenze 753, Tel : 06 433 33 49</li>
      </ul>
    `,
    category: 'services'
  }
];