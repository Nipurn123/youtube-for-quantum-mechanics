import React from 'react';
import './Header.css';

const Header = ({ searchQuery, setSearchQuery, toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={toggleSidebar}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
        <div className="logo">
          <h1>QuantumTube</h1>
          <span className="subtitle">Powered by 100X Prompt</span>
        </div>
      </div>

      <div className="header-center">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search quantum mechanics videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="header-right">
        <div className="user-info">
          <span className="welcome-text">Learn Quantum Mechanics</span>
          <div className="brand-badge">100X</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
