import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Foundation': '#4CAF50',
      'Beginner': '#8BC34A',
      'Intermediate': '#FF9800',
      'Advanced': '#F44336',
      'Graduate': '#9C27B0',
      'Educational': '#2196F3',
      'All Levels': '#607D8B'
    };
    return colors[difficulty] || '#757575';
  };

  const getInstitutionLogo = (institution) => {
    const logos = {
      'MIT': '🏛️',
      'Stanford': '🌲',
      'Yale': '🏫',
      'IIT': '🎯',
      'Caltech': '⚛️',
      'Independent': '💡'
    };
    return logos[institution] || '🏫';
  };

  return (
    <div className="video-card">
      <Link to={`/watch/${video.id}`} className="video-link">
        <div className="video-thumbnail">
          <img
            src={video.thumbnail}
            alt={video.title}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/320x180/1a1a1a/ffffff?text=Quantum+Video';
            }}
          />
          <div className="video-duration">{video.duration}</div>
          <div className="video-overlay">
            <div className="play-button">▶</div>
          </div>
        </div>
      </Link>

      <div className="video-info">
        <div className="video-header">
          <Link to={`/watch/${video.id}`} className="video-title-link">
            <h3 className="video-title">{video.title}</h3>
          </Link>
          <div className="video-badges">
            <span
              className="difficulty-badge"
              style={{ backgroundColor: getDifficultyColor(video.difficulty) }}
            >
              {video.difficulty}
            </span>
            <span className="institution-badge">
              {getInstitutionLogo(video.institution)} {video.institution}
            </span>
          </div>
        </div>

        <div className="video-meta">
          <div className="channel-info">
            <span className="channel-name">{video.channel}</span>
            <span className="course-name">{video.course}</span>
          </div>
          <div className="video-stats">
            <span className="views">{video.views}</span>
            <span className="upload-date">{video.uploadDate}</span>
          </div>
        </div>

        <p className="video-description">{video.description}</p>

        <div className="video-actions">
          <Link to={`/watch/${video.id}`} className="watch-button">
            ▶ Watch Now
          </Link>
          <Link to={`/playlist/${video.playlist}`} className="playlist-button">
            📚 View Playlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
