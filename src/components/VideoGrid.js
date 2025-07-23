import React from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import './VideoGrid.css';

const VideoGrid = ({ videos, selectedCategory, selectedInstitution }) => {
  const getFilterTitle = () => {
    if (selectedCategory !== 'All' && selectedInstitution !== 'All') {
      return `${selectedCategory} • ${selectedInstitution}`;
    } else if (selectedCategory !== 'All') {
      return selectedCategory;
    } else if (selectedInstitution !== 'All') {
      return selectedInstitution;
    }
    return 'All Quantum Mechanics Videos';
  };

  const getFilterDescription = () => {
    if (selectedCategory !== 'All') {
      const descriptions = {
        'Foundation': 'Build your physics foundation before diving into quantum mechanics',
        'Beginner': 'Perfect starting point for learning quantum mechanics fundamentals',
        'Intermediate': 'Deepen your understanding with advanced mathematical treatment',
        'Advanced': 'Graduate-level topics and cutting-edge research',
        'Graduate': 'Research-level quantum field theory and advanced topics',
        'Educational': 'General educational content and historical perspectives'
      };
      return descriptions[selectedCategory] || '';
    }

    if (selectedInstitution !== 'All') {
      const descriptions = {
        'MIT': 'World-renowned quantum mechanics courses from MIT OpenCourseWare',
        'Stanford': 'Stanford University\'s approach to modern quantum physics',
        'Yale': 'Yale\'s comprehensive physics curriculum with Prof. Shankar',
        'IIT': 'Indian Institute of Technology\'s advanced physics courses',
        'Caltech': 'Legendary lectures from Caltech including Feynman\'s work',
        'Independent': 'High-quality independent educational content'
      };
      return descriptions[selectedInstitution] || '';
    }

    return 'Curated collection of the best quantum mechanics educational videos from top universities and educators worldwide.';
  };

  if (videos.length === 0) {
    return (
      <div className="video-grid-container">
        <div className="filter-header">
          <h2>{getFilterTitle()}</h2>
          <p>{getFilterDescription()}</p>
        </div>
        <div className="no-videos">
          <div className="no-videos-icon">🔍</div>
          <h3>No videos found</h3>
          <p>Try adjusting your filters or search terms</p>
        </div>
      </div>
    );
  }

  return (
    <div className="video-grid-container">
      <div className="filter-header">
        <h2>{getFilterTitle()}</h2>
        <p>{getFilterDescription()}</p>
        <div className="video-count">
          {videos.length} video{videos.length !== 1 ? 's' : ''} found
        </div>
      </div>

      <div className="video-grid">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
