import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, FileSpreadsheet, Building2, Cpu } from 'lucide-react';
import { profileData } from '../data/profileData';

const getIconForSkill = (skill) => {
  if (skill.includes('IFRS')) return <Building2 size={24} />;
  if (skill.includes('Power BI')) return <Database size={24} />;
  if (skill.includes('Excel')) return <FileSpreadsheet size={24} />;
  if (skill.includes('SAP')) return <Terminal size={24} />;
  return <Cpu size={24} />;
};

const TechnicalCompetencies = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-navy-dark dark:text-white mb-8 flex items-center">
        <span className="bg-gold w-2 h-8 mr-3 rounded-sm"></span>
        Technical Competencies
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileData.technicalCompetencies.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card flex items-center p-5 border-l-4 border-l-navy dark:border-l-navy-light hover:border-l-gold dark:hover:border-l-gold group"
          >
            <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-full text-navy-light dark:text-gray-300 group-hover:text-gold dark:group-hover:text-gold transition-colors">
              {getIconForSkill(skill)}
            </div>
            <p className="ml-4 font-semibold text-gray-800 dark:text-gray-200">{skill}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalCompetencies;
