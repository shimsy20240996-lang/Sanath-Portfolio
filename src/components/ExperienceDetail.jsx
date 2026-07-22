import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const ExperienceDetail = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`mb-12 flex flex-col md:flex-row w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline dot and line are handled in the parent, but we add spacing here */}
      <div className="md:w-1/2 w-full px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="card relative hover:-translate-y-1 transition-transform duration-300"
        >
          {/* Arrow pointing to timeline */}
          <div className={`hidden md:block absolute top-8 w-4 h-4 bg-white dark:bg-slate-800 border-t border-l border-gray-100 dark:border-gray-700 transform rotate-45 ${isEven ? '-left-2 -ml-[1px]' : '-right-2 -mr-[1px] rotate-[225deg]'}`}></div>
          
          <div className="flex flex-col mb-4">
            <h3 className="text-xl font-bold text-navy-dark dark:text-white">{experience.role}</h3>
            <div className="flex items-center text-gold font-medium mt-1 mb-2">
              <Briefcase size={16} className="mr-2" />
              <span>{experience.company}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-700 w-fit px-3 py-1 rounded-full border border-gray-100 dark:border-gray-600">
              <Calendar size={14} className="mr-2" />
              <span>{experience.duration} ({experience.years})</span>
            </div>
          </div>
          
          <ul className="space-y-2 mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
            {experience.responsibilities.map((task, i) => (
              <li key={i} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                <ChevronRight size={16} className="text-gold flex-shrink-0 mt-0.5 mr-1" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      {/* Timeline center spacer */}
      <div className="hidden md:flex w-10 md:w-0 justify-center relative">
        <div className="absolute w-1 bg-gray-200 dark:bg-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute top-8 w-4 h-4 rounded-full bg-gold border-4 border-white dark:border-slate-900 shadow left-1/2 transform -translate-x-1/2 z-10"></div>
      </div>
      
      {/* Empty half for layout */}
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  );
};

export default ExperienceDetail;
