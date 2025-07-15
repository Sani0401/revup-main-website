import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import Analytics from './components/Analytics';
import Integrations from './components/Integrations';
import Security from './components/Security';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Analytics />
      <Integrations />
      <Security />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;