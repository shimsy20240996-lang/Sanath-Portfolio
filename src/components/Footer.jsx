import React from 'react';
import { profileData } from '../data/profileData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-dark border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="text-white font-bold text-xl tracking-tight">
            {profileData.name.split(' ')[0]}<span className="text-gold">.</span>
          </span>
          <p className="text-gray-400 text-sm mt-1">{profileData.title}</p>
        </div>
        
        <div className="text-gray-500 text-sm text-center">
          &copy; {currentYear} {profileData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
