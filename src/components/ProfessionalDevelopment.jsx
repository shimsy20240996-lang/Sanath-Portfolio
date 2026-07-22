import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { profileData } from '../data/profileData';

const ProfessionalDevelopment = () => {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-navy-dark mb-8 flex items-center">
        <span className="bg-gold w-2 h-8 mr-3 rounded-sm"></span>
        Professional Development
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileData.professionalDevelopment.map((course, index) => {
          const [title, provider] = course.split('–').map(s => s.trim());
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-50 rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start"
            >
              <div className="bg-white p-2 rounded-md shadow-sm text-navy mr-4">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">{title}</h4>
                <p className="text-gold-dark text-xs font-bold mt-1 uppercase tracking-wide">{provider}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfessionalDevelopment;
