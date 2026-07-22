import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';

const CoreCompetencies = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-navy-dark mb-8 flex items-center">
        <span className="bg-gold w-2 h-8 mr-3 rounded-sm"></span>
        Core Competencies
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profileData.coreCompetencies.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-800">{skill}</span>
              <span className="text-gold font-bold text-sm">Expert</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-navy h-2 rounded-full" 
                style={{ width: `${Math.floor(Math.random() * 15 + 85)}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreCompetencies;
