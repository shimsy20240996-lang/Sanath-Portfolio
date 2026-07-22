import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, ExternalLink, Send } from 'lucide-react';
import { profileData } from '../data/profileData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-container bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <h2 className="section-title dark:text-white">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-navy-dark dark:text-white mb-6">Contact Information</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <a href={`mailto:${profileData.contact.email}`} className="flex items-center group">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-full shadow-sm text-navy dark:text-gray-300 group-hover:text-gold dark:group-hover:text-gold group-hover:shadow-md transition-all border dark:border-gray-700">
                <Mail size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                <p className="text-navy-dark dark:text-gray-100 font-semibold group-hover:text-gold transition-colors">{profileData.contact.email}</p>
              </div>
            </a>
            
            <a href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`} className="flex items-center group">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-full shadow-sm text-navy dark:text-gray-300 group-hover:text-gold dark:group-hover:text-gold group-hover:shadow-md transition-all border dark:border-gray-700">
                <Phone size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Phone</p>
                <p className="text-navy-dark dark:text-gray-100 font-semibold group-hover:text-gold transition-colors">{profileData.contact.phone}</p>
              </div>
            </a>
            
            <div className="flex items-center">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-full shadow-sm text-navy dark:text-gray-300 border dark:border-gray-700">
                <MapPin size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
                <p className="text-navy-dark dark:text-gray-100 font-semibold">{profileData.contact.location}</p>
              </div>
            </div>
            
            <a href={profileData.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center group">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-full shadow-sm text-navy dark:text-gray-300 group-hover:text-gold dark:group-hover:text-gold group-hover:shadow-md transition-all border dark:border-gray-700">
                <Globe size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">LinkedIn</p>
                <p className="text-navy-dark dark:text-gray-100 font-semibold group-hover:text-gold transition-colors">Connect with me</p>
              </div>
            </a>
            
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="card bg-white dark:bg-slate-800 p-8">
            <h3 className="text-2xl font-bold text-navy-dark dark:text-white mb-6">Send Me a Message</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md focus:ring-navy dark:focus:ring-gold focus:border-navy dark:focus:border-gold outline-none transition-colors dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md focus:ring-navy dark:focus:ring-gold focus:border-navy dark:focus:border-gold outline-none transition-colors dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md focus:ring-navy dark:focus:ring-gold focus:border-navy dark:focus:border-gold outline-none transition-colors resize-none dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-3 px-4 rounded-md transition-colors flex justify-center items-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : submitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
