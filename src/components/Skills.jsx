import React from 'react';
import TechnicalCompetencies from './TechnicalCompetencies';
import CoreCompetencies from './CoreCompetencies';
import PersonalSkills from './PersonalSkills';

const Skills = () => {
  return (
    <section id="skills" className="section-container bg-white">
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="mt-16">
        <TechnicalCompetencies />
        <CoreCompetencies />
        <PersonalSkills />
      </div>
    </section>
  );
};

export default Skills;
