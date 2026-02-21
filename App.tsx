import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CatalogSection from './components/CatalogSection';
import ProductCollection from './components/ProductCollection';
import TeamSection from './components/TeamSection';
import WorkShowcaseVideo from './components/WorkShowcaseVideo';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PortfolioPage from './components/PortfolioPage';
import AIDesignStudio from './components/AIDesignStudio';
import AboutSummary from './components/AboutSummary';
import ChatBot from './components/ChatBot';
import GalleryPage from './components/GalleryPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'about' | 'contact' | 'portfolio' | 'gallery' | 'privacy' | 'terms'>('home');

  // Ensure scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-neutral-200">
      <Header setView={setView} currentView={view} />
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero />
            <Stats />
            <AboutSummary onKnowMore={() => setView('about')} />
            <CatalogSection onSampleRequest={() => setView('contact')} />
            <ProductCollection onViewAll={() => setView('portfolio')} />
            <AIDesignStudio />
            <TeamSection />
            <WorkShowcaseVideo />
            <LocationSection />
          </>
        ) : view === 'about' ? (
          <AboutPage />
        ) : view === 'portfolio' ? (
          <PortfolioPage setView={setView} />
        ) : view === 'gallery' ? (
          <GalleryPage />
        ) : view === 'privacy' ? (
          <PrivacyPage />
        ) : view === 'terms' ? (
          <TermsPage />
        ) : (
          <ContactPage />
        )}
      </main>
      <Footer setView={setView} />
      <ChatBot setView={setView} />
    </div>
  );
};

export default App;