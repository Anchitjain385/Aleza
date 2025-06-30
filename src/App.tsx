import React, { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import ChatInterface from './components/ChatInterface';
import CrisisModal from './components/CrisisModal';

type AppView = 'welcome' | 'chat';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('welcome');
  const [showCrisisModal, setShowCrisisModal] = useState(false);

  const handleStartChat = () => {
    setCurrentView('chat');
  };

  const handleBackToWelcome = () => {
    setCurrentView('welcome');
  };

  const handleCrisisClick = () => {
    setShowCrisisModal(true);
  };

  const handleCloseCrisisModal = () => {
    setShowCrisisModal(false);
  };

  return (
    <div className="min-h-screen">
      {currentView === 'welcome' && (
        <>
          <Header onCrisisClick={handleCrisisClick} />
          <Welcome onStartChat={handleStartChat} />
        </>
      )}
      
      {currentView === 'chat' && (
        <ChatInterface onBack={handleBackToWelcome} />
      )}

      <CrisisModal 
        isOpen={showCrisisModal} 
        onClose={handleCloseCrisisModal} 
      />
    </div>
  );
}

export default App;