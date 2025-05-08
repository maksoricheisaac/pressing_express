import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';


const HomePage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Pressing Express - La qualité fait la différence</title>
        <meta name="description" content="Service de pressing et nettoyage professionnel de qualité. Nettoyage à sec, blanchisserie, retouches et ameublement. La qualité fait la différence." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pressing Express",
            "image": "https://www.pressing-express.fr/logo.jpg",
            "description": "Service de pressing professionnel de qualité. La qualité fait la différence.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Brazzaville",
              "addressLocality": "Paris",
              "postalCode": "75015",
              "addressCountry": "FR"
            },
            "telephone": "+33123456789",
            "openingHours": "Mo-Fr 08:00-19:00 Sa 09:00-18:00",
            "priceRange": "€€"
          })}
        </script>
      </Helmet>
      
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default HomePage;