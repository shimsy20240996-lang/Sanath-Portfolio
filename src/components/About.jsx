import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Award, Shield } from 'lucide-react';
import { profileData } from '../data/profileData';

const About = () => {
  return (
    <section id="about" className="section-container bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <h2 className="section-title dark:text-white">Professional Summary</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="card bg-white dark:bg-slate-800 border-l-4 border-l-gold">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {profileData.summary}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="card flex items-center space-x-4">
              <div className="bg-navy-light dark:bg-slate-700 p-3 rounded-lg text-white">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase">Nationality</p>
                <p className="text-navy-dark dark:text-gray-100 font-semibold">{profileData.personalInfo.nationality}</p>
              </div>
            </div>
            <div className="card flex items-center space-x-4">
              <div className="bg-navy-light dark:bg-slate-700 p-3 rounded-lg text-white">
                <Shield size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase">Status</p>
                <p className="text-navy-dark dark:text-gray-100 font-semibold">{profileData.personalInfo.status}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-navy-dark dark:bg-slate-800 rounded-xl p-6 text-white shadow-xl h-full border dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="text-gold" size={28} />
              <h3 className="text-xl font-bold">Key Highlights</h3>
            </div>
            
            <ul className="space-y-4">
              {profileData.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-gold flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
