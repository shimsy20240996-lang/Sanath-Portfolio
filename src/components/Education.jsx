import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Medal } from 'lucide-react';
import { profileData } from '../data/profileData';
import ProfessionalDevelopment from './ProfessionalDevelopment';

const Education = () => {
  return (
    <section id="education" className="section-container bg-white dark:bg-slate-900 transition-colors duration-300">
      <h2 className="section-title dark:text-white">Education & Certifications</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {profileData.education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[100px] -z-10 group-hover:bg-gold/10 transition-colors"></div>
            
            <div className="bg-navy-light text-white p-4 rounded-xl flex-shrink-0 shadow-md">
              {item.degree.includes('BSc') || item.degree.includes('MSc') ? (
                <GraduationCap size={32} />
              ) : (
                <Medal size={32} />
              )}
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-navy-dark dark:text-white leading-tight mb-2">
                {item.degree}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{item.institution}</p>
              
              <div className="mt-4 flex items-center flex-wrap gap-3">
                <span className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm font-semibold px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600">
                  {item.year}
                </span>
                {item.grade && (
                  <span className="bg-gold/10 text-gold-dark text-sm font-semibold px-3 py-1 rounded-full border border-gold/30">
                    {item.grade}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <ProfessionalDevelopment />
    </section>
  );
};

export default Education;
