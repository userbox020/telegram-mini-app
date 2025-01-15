import React, { useState, useEffect } from 'react';
    import './MainContent.css';

    function MainContent() {
      const [claimValue, setClaimValue] = useState(0.026);
      const [minedValue, setMinedValue] = useState(0.02);

      useEffect(() => {
        const interval = setInterval(() => {
          setClaimValue((prevValue) => {
            const newValue = prevValue + 0.00052166;
            return parseFloat(newValue.toFixed(3));
          });
        }, 60000);

        return () => clearInterval(interval);
      }, []);

      const handleClaim = () => {
        setMinedValue((prevMinedValue) => {
          const newMinedValue = prevMinedValue + claimValue;
          return parseFloat(newMinedValue.toFixed(3));
        });
        setClaimValue(0);
      };

      return (
        <main className="main-content">
          <div className="mined-card">
            <div className="mined-header">
              <span>Total $TOKEN mined</span>
            </div>
            <div className="mined-amount">
              <span className="mined-value">{minedValue}</span>
            </div>
            <div className="mined-per-hour">
              <span>$TOKEN per hour:</span>
              <span>0.0313</span>
            </div>
          </div>
          <div className="claim-card">
            <div className="claim-circle" onClick={handleClaim}>
              <div className="claim-text">
                <span>claim</span>
                <span className="claimValue">{claimValue}</span>
                <span>TOKEN</span>
              </div>
            </div>
            <div className="claim-info">
              <span>burn in 05:07:06 | claim from 0.01</span>
            </div>
            <button className="auto-claim-button">Activate auto-claim</button>
          </div>
        </main>
      );
    }

    export default MainContent;
