import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';

const PersonalSkills = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-navy-dark dark:text-white mb-8 flex items-center">
        <span className="bg-gold w-2 h-8 mr-3 rounded-sm"></span>
        Personal Skills
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {profileData.personalSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-navy dark:bg-slate-800 text-white dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-md border border-navy-light dark:border-gray-700 hover:bg-gold dark:hover:bg-gold hover:text-navy-dark dark:hover:text-navy-dark hover:border-gold dark:hover:border-gold transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonalSkills;
