import React, { useState, useEffect } from 'react';
    import './MainContent.css';

    function MainContent() {
      const [claimValue, setClaimValue] = useState(0.000);
      const [minedValue, setMinedValue] = useState(0.01);
      const [remainingTime, setRemainingTime] = useState('');

      useEffect(() => {
        const timeString = '06:00:00';
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        const interval = setInterval(() => {
          if (totalSeconds > 0) {
            totalSeconds--;
            const newHours = Math.floor(totalSeconds / 3600);
            const newMinutes = Math.floor((totalSeconds % 3600) / 60);
            const newSeconds = totalSeconds % 60;
            setRemainingTime(
              `${String(newHours).padStart(2, '0')}:${String(
                newMinutes,
              ).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`,
            );
          } else {
            clearInterval(interval);
            setRemainingTime('Time Expired');
          }
        }, 1000);

        return () => clearInterval(interval);
      }, []);

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
              <div className="claim-animation"></div>
            </div>
            <div className="claim-info">
              <span>burn in {remainingTime} | claim from 0.001</span>
            </div>
            <button className="auto-claim-button">Activate auto-claim</button>
          </div>
        </main>
      );
    }

    export default MainContent;
