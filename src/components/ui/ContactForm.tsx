import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import Button from './Button';
import { useAppContext } from '../../context/AppContext';

const ContactForm: React.FC = () => {
  const { isContactFormOpen, closeContactForm } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowNotification(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', message: '' });
        closeContactForm();
        
        // Hide notification after 5 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 5000);
      }, 2000);
    }, 1000);
  };

  return (
    <>
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center">
          <CheckCircle size={20} className="mr-2" />
          <span>Message envoyé avec succès !</span>
        </div>
      )}

      {isContactFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl animate-fade-in">
            <button 
              onClick={closeContactForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
            
            <div className="p-6">
              <h3 className="text-2xl font-display font-bold text-primary-500 mb-4">Contactez-nous</h3>
              
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="text-success-500 text-xl mb-2">Message envoyé !</div>
                  <p className="text-gray-600">Nous reviendrons vers vous très rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;