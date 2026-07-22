import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ArrowRight, TrendingUp } from 'lucide-react';
import { profileData } from '../data/profileData';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-navy-dark pt-20 overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-navy blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gold-dark blur-3xl opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-navy/50 border border-gray-700 rounded-full px-4 py-1.5 mb-6">
              <TrendingUp size={16} className="text-gold" />
              <span className="text-gray-300 text-sm font-medium">Finance Professional</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Hello, I'm <br/>
              <span className="text-gold">{profileData.name}</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-6">
              {profileData.title}
            </h2>
            
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed border-l-4 border-gold pl-4">
              {profileData.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="contact" 
                smooth={true} 
                duration={500}
                offset={-70}
                className="cursor-pointer bg-gold hover:bg-gold-light text-navy-dark px-8 py-3 rounded-md font-semibold transition-colors flex items-center space-x-2 shadow-lg shadow-gold/20"
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} />
              </Link>
              
              {/* Replace '#' with actual CV path if available */}
              <a 
                href="#" 
                className="bg-transparent border border-gray-500 hover:border-gray-300 text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center space-x-2"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            {/* Minimalist illustration or placeholder for a profile image */}
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy to-navy-light rounded-2xl rotate-6 shadow-2xl shadow-black/50"></div>
              <div className="absolute inset-0 bg-charcoal rounded-2xl -rotate-3 border border-gray-700 flex items-center justify-center overflow-hidden">
                 <div className="text-center p-8">
                   <TrendingUp size={64} className="text-gold/50 mx-auto mb-4" />
                   <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Financial Excellence</p>
                 </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
