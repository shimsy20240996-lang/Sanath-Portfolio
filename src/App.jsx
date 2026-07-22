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
    <div className="font-sans text-charcoal-dark bg-slate-50 min-h-screen">
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
