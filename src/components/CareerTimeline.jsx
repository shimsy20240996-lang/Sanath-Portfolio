import React from 'react';
import ExperienceDetail from './ExperienceDetail';
import { profileData } from '../data/profileData';

const CareerTimeline = () => {
  return (
    <section id="experience" className="section-container bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <h2 className="section-title dark:text-white">Career Journey</h2>
      
      <div className="relative mt-20 max-w-5xl mx-auto">
        {/* Central timeline line for desktop */}
        <div className="hidden md:block absolute w-1 bg-gray-200 dark:bg-gray-700 h-full left-1/2 transform -translate-x-1/2 rounded-full"></div>
        
        <div className="flex flex-col relative z-10">
          {profileData.experience.map((exp, index) => (
            <ExperienceDetail key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
