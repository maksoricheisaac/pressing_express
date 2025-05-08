import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Rating from '../ui/Rating';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection: React.FC = () => {
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
    <Section bgColor="bg-white">
      <SectionTitle
        title="Témoignages Clients"
        subtitle="Découvrez ce que nos clients disent de nos services"
        centered
      />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={item}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="mb-4">
                <Rating value={testimonial.rating} />
              </div>
              
              <p className="text-gray-700 mb-4 flex-grow italic">"{testimonial.content}"</p>
              
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <div className="bg-primary-50 p-6 rounded-xl inline-block">
          <p className="text-2xl font-display font-semibold text-primary-600 mb-2">
            Note moyenne de 4.8/5
          </p>
          <p className="text-gray-700">
            basée sur plus de 500 avis clients vérifiés
          </p>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;