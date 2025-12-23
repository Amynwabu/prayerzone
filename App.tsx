import React, { useState, useEffect } from 'react';
import { View } from './types';
import { Header, Footer, AIChatOverlay } from './components/Layout';
import { HomeView, AboutView, ContactView } from './views/MainViews';
import { PrayerRoomsView, HowToPrayView, HelpPrayView, StreetPrayerView, OnlinePrayerView, CreativeSpacesView } from './views/PrayerViews';
import { BlogView, AIToolsView, ResourcesView } from './views/ResourceViews';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case View.HOME: return <HomeView setView={setCurrentView} />;
      case View.ABOUT: return <AboutView />;
      case View.PRAYER_SPACES: return <CreativeSpacesView />;
      case View.PRAYER_ROOMS: return <PrayerRoomsView />;
      case View.HOW_TO_PRAY: return <HowToPrayView />;
      case View.HELP_PRAY: return <HelpPrayView />;
      case View.STREETS: return <StreetPrayerView />;
      case View.ONLINE: return <OnlinePrayerView />;
      case View.BLOG: return <BlogView />;
      case View.AI_TOOLS: return <AIToolsView />;
      case View.RESOURCES: return <ResourcesView />;
      case View.CONTACT: return <ContactView />;
      default: return <HomeView setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-pearl">
      <Header currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer setView={setCurrentView} />
      
      {/* Floating AI Assistant */}
      <AIChatOverlay />
    </div>
  );
};

export default App;
