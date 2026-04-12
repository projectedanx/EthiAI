import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedItems } from './components/FeaturedItems';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { UserProfile } from './components/UserProfile';

type View = 'marketplace' | 'profile';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('marketplace');

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const MarketplaceView = () => (
    <>
      <Hero onStartCreating={() => setIsAuditModalOpen(true)} />
      <FeaturedItems />
      <HowItWorks />
    </>
  );

  return (
    <div className="min-h-screen bg-brand-background font-sans">
      <Header
        onStartCreating={() => setIsAuditModalOpen(true)}
        onNavigate={(view) => navigateTo(view)}
        currentView={currentView}
      />
      <main>
        {currentView === 'marketplace' && <MarketplaceView />}
        {currentView === 'profile' && <UserProfile />}
      </main>
      <Footer onNavigate={(view) => navigateTo(view)} />
      {isAuditModalOpen && <AuditModal onClose={() => setIsAuditModalOpen(false)} />}
    </div>
  );
}
