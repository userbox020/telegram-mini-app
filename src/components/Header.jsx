import React from 'react';
    import './Header.css';

    function Header() {
      return (
        <header className="header">
          <div className="header-left">
            <div className="balance-card">
              <span className="balance-label">Total balance</span>
              <span className="balance-amount">$0.00</span>
            </div>
          </div>
          <div className="header-right">
            <div className="guild-card">
              <span className="guild-label">Guild level →</span>
              <span className="guild-icon">1</span>
            </div>
          </div>
        </header>
      );
    }

    export default Header;
