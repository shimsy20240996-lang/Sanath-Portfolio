import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CareerTimeline from './components/CareerTimeline';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-charcoal-dark dark:text-gray-100 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <CareerTimeline />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
