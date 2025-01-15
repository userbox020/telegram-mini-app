import React from 'react';
    import './Footer.css';

    function Footer() {
      return (
        <footer className="footer">
          <div className="footer-item">
            <span className="footer-icon">⚙️</span>
            <span>Mining</span>
          </div>
          <div className="footer-item">
            <span className="footer-icon">✔️</span>
            <span>Tasks</span>
          </div>
          <div className="footer-item">
            <span className="footer-icon">BIG</span>
            <span>Pump</span>
          </div>
          <div className="footer-item">
            <span className="footer-icon">🗂️</span>
            <span>Wallet</span>
          </div>
          <div className="footer-item">
            <span className="footer-icon">❤️</span>
            <span>Frens</span>
          </div>
        </footer>
      );
    }

    export default Footer;
