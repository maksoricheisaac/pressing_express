import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Comment faire durer vos vêtements préférés plus longtemps',
    excerpt: 'Découvrez nos conseils d\'experts pour préserver la qualité et prolonger la durée de vie de vos pièces favorites.',
    content: `
      <p>Vos vêtements préférés méritent les meilleurs soins pour rester beaux et durables. Voici nos conseils d'experts :</p>
      
      <h3>Lavage adapté</h3>
      <p>Respectez toujours les étiquettes d'entretien. Lavez vos vêtements à l'envers et privilégiez les programmes à basse température (30°C) et les lessives douces.</p>
      
      <h3>Séchage optimal</h3>
      <p>Évitez le sèche-linge pour les matières délicates. Le séchage à l'air libre prolonge significativement la durée de vie des fibres.</p>
      
      <h3>Rangement intelligent</h3>
      <p>Utilisez des cintres adaptés pour préserver la forme des vêtements. Les cintres en bois sont idéaux pour les vestes et manteaux.</p>
      
      <h3>Rotation des vêtements</h3>
      <p>Alternez les pièces que vous portez pour permettre aux fibres de se reposer entre les utilisations.</p>
      
      <h3>Confiez-les à des professionnels</h3>
      <p>Pour les pièces précieuses ou délicates, rien ne remplace l'expertise d'un professionnel du nettoyage.</p>
    `,
    author: 'Camille Leroy',
    date: '15 mars 2023',
    image: 'https://images.pexels.com/photos/5699756/pexels-photo-5699756.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'comment-faire-durer-vos-vetements',
    tags: ['conseils', 'entretien', 'durabilité']
  },
  {
    id: '2',
    title: 'Guide complet pour éliminer les taches tenaces',
    excerpt: 'Un guide pratique pour traiter efficacement les taches les plus difficiles sur vos vêtements et textiles.',
    content: `
      <p>Les taches font partie de la vie, mais avec les bonnes techniques, elles ne sont pas une fatalité :</p>
      
      <h3>Taches de vin rouge</h3>
      <p>Absorbez rapidement le liquide avec un papier absorbant sans frotter. Saupoudrez de sel pour absorber le reste, puis rincez à l'eau froide avant de laver normalement.</p>
      
      <h3>Taches d'herbe</h3>
      <p>Prétraitez avec un mélange de vinaigre blanc et d'eau à parts égales. Laissez agir 30 minutes puis lavez normalement.</p>
      
      <h3>Taches de café</h3>
      <p>Rincez immédiatement à l'eau froide. Pour les taches séchées, faites tremper dans une solution d'eau tiède et de lessive avant de laver.</p>
      
      <h3>Taches d'huile</h3>
      <p>Saupoudrez de talc ou de fécule pour absorber, laissez agir plusieurs heures puis brossez. Prétraitez avec un dégraissant doux avant lavage.</p>
      
      <h3>Taches de maquillage</h3>
      <p>Utilisez un démaquillant sans huile sur la tache, tamponnez doucement puis lavez normalement.</p>
    `,
    author: 'Antoine Mercier',
    date: '28 avril 2023',
    image: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'guide-eliminer-taches-tenaces',
    tags: ['taches', 'nettoyage', 'conseils']
  },
  {
    id: '3',
    title: 'L\'impact environnemental du nettoyage à sec traditionnel',
    excerpt: 'Découvrez les enjeux écologiques liés au pressing et comment nous adoptons des solutions plus respectueuses de l\'environnement.',
    content: `
      <p>L'industrie du nettoyage à sec évolue vers des pratiques plus durables :</p>
      
      <h3>Les défis environnementaux</h3>
      <p>Le nettoyage à sec traditionnel utilise des solvants comme le perchloroéthylène, potentiellement nocifs pour l'environnement et la santé.</p>
      
      <h3>Les alternatives éco-responsables</h3>
      <p>De nouvelles méthodes utilisant des solvants biodégradables, le nettoyage à base d'eau amélioré (wet cleaning) ou le CO2 supercritique offrent des alternatives plus vertes.</p>
      
      <h3>Notre engagement</h3>
      <p>Chez Pressing Express, nous avons investi dans des équipements modernes utilisant des procédés écologiques, réduisant notre consommation d'eau et d'énergie de 40%.</p>
      
      <h3>Ce que vous pouvez faire</h3>
      <p>Choisir un pressing éco-responsable, suivre les conseils d'entretien adaptés à chaque vêtement, et privilégier la qualité à la quantité dans vos achats.</p>
    `,
    author: 'Pierre Durand',
    date: '12 juin 2023',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'impact-environnemental-nettoyage-sec',
    tags: ['environnement', 'éco-responsabilité', 'innovation']
  }
];