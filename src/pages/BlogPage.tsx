import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
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
      title="Blog | Pressing Express"
      description="Découvrez nos conseils d'experts pour l'entretien de vos vêtements, les dernières tendances et nos actualités."
    >
      {/* Hero Section */}
      <Section className="bg-primary-50 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-600 mb-4">
            Blog & Conseils
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos conseils d'experts pour prendre soin de vos vêtements et nos actualités
          </p>
        </div>
      </Section>
      
      {/* Blog Posts */}
      <Section bgColor="bg-white">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              variants={item}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <div className="flex items-center mr-4">
                    <Clock size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <Link to={`/blog/${post.slug}`} className="block">
                  <h2 className="text-xl font-semibold mb-3 hover:text-primary-500 transition-colors">{post.title}</h2>
                </Link>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <div key={index} className="flex items-center text-sm text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        <Tag size={12} className="mr-1" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600">
                    Lire
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>
      
      {/* Newsletter Section */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-semibold mb-4 text-primary-600">Restez informé</h2>
          <p className="text-lg text-gray-700 mb-6">
            Abonnez-vous à notre newsletter pour recevoir nos conseils d'entretien et nos offres spéciales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-secondary-500 text-white font-medium px-6 py-3 rounded-md hover:bg-secondary-600 transition-colors">
              S'abonner
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-3">
            Nous respectons votre vie privée. Désabonnez-vous à tout moment.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default BlogPage;