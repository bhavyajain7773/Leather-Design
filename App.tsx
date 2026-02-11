
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CatalogSection from './components/CatalogSection';
import ProductCollection from './components/ProductCollection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-neutral-200">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <CatalogSection />
        <ProductCollection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
