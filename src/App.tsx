import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />
        <Hero />
        <Features />
        <Screenshots />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;