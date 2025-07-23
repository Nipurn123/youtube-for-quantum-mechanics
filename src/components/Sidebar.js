import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({
  isOpen,
  categories,
  institutions,
  selectedCategory,
  selectedInstitution,
  setSelectedCategory,
  setSelectedInstitution,
  playlists
}) => {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-content">

        {/* Navigation */}
        <div className="sidebar-section">
          <h3>Navigation</h3>
          <Link to="/" className="sidebar-link">
            <span>🏠</span> Home
          </Link>
          <Link to="/" className="sidebar-link">
            <span>📚</span> All Videos
          </Link>
        </div>

        {/* Difficulty Filters */}
        <div className="sidebar-section">
          <h3>Difficulty Level</h3>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {getDifficultyIcon(category)} {category}
            </button>
          ))}
        </div>

        {/* Institution Filters */}
        <div className="sidebar-section">
          <h3>Institutions</h3>
          {institutions.map(institution => (
            <button
              key={institution}
              className={`filter-button ${selectedInstitution === institution ? 'active' : ''}`}
              onClick={() => setSelectedInstitution(institution)}
            >
              {getInstitutionIcon(institution)} {institution}
            </button>
          ))}
        </div>

        {/* Featured Playlists */}
        <div className="sidebar-section">
          <h3>Featured Playlists</h3>
          {playlists.slice(0, 5).map(playlist => (
            <Link
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className="playlist-link"
            >
              <div className="playlist-item">
                <div className="playlist-info">
                  <span className="playlist-title">{playlist.title}</span>
                  <span className="playlist-meta">
                    {playlist.institution} • {playlist.videoCount} videos
                  </span>
                </div>
                <span className={`difficulty-badge ${playlist.difficulty.toLowerCase()}`}>
                  {playlist.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Learning Path */}
        <div className="sidebar-section">
          <h3>Recommended Learning Path</h3>
          <div className="learning-path">
            <div className="path-step">
              <span className="step-number">1</span>
              <span className="step-text">Start with MIT 8.04 (2016)</span>
            </div>
            <div className="path-step">
              <span className="step-number">2</span>
              <span className="step-text">MIT 8.04 (2013) Full Course</span>
            </div>
            <div className="path-step">
              <span className="step-number">3</span>
              <span className="step-text">MIT 8.05 Intermediate</span>
            </div>
            <div className="path-step">
              <span className="step-number">4</span>
              <span className="step-text">Advanced Topics</span>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};

const getDifficultyIcon = (category) => {
  const icons = {
    'All': '📋',
    'Foundation': '🎯',
    'Beginner': '🌱',
    'Intermediate': '📈',
    'Advanced': '🎓',
    'Graduate': '🔬',
    'Educational': '📖'
  };
  return icons[category] || '📚';
};

const getInstitutionIcon = (institution) => {
  const icons = {
    'All': '🌍',
    'MIT': '🏛️',
    'Stanford': '🌲',
    'Yale': '🏫',
    'IIT': '🎯',
    'Caltech': '⚛️',
    'Independent': '💡'
  };
  return icons[institution] || '🏫';
};

export default Sidebar;
