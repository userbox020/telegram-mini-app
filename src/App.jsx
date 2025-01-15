import React, { useState, useEffect } from 'react';
    import Header from './components/Header';
    import MainContent from './components/MainContent';
    import Footer from './components/Footer';
    import './App.css';

    function App() {
      const [hasVisited, setHasVisited] = useState(false);

      useEffect(() => {
        const visited = localStorage.getItem('visited');
        if (visited) {
          setHasVisited(true);
        }
      }, []);

      const handleStartMining = () => {
        localStorage.setItem('visited', 'true');
        setHasVisited(true);
      };

      return (
        <div className="app-container">
          {!hasVisited ? (
            <div className="start-mining-container">
              <button className="start-mining-button" onClick={handleStartMining}>
                Start Mining
              </button>
            </div>
          ) : (
            <>
              <Header />
              <MainContent />
              <Footer />
            </>
          )}
        </div>
      );
    }

    export default App;
