import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './VideoPlayer.css';

const VideoPlayer = ({ videos }) => {
  const { videoId } = useParams();
  const video = videos.find(v => v.id === videoId);

  if (!video) {
    return (
      <div className="video-player-container">
        <div className="video-not-found">
          <h2>Video not found</h2>
          <Link to="/" className="back-home">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const relatedVideos = videos
    .filter(v => v.id !== videoId && (v.course === video.course || v.institution === video.institution))
    .slice(0, 6);

  return (
    <div className="video-player-container">
      <div className="video-player-main">
        <div className="video-player">
          <div className="video-embed">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>

        <div className="video-details">
          <h1 className="video-title">{video.title}</h1>

          <div className="video-meta-info">
            <div className="video-stats">
              <span className="views">{video.views}</span>
              <span className="upload-date">Uploaded {video.uploadDate}</span>
            </div>

            <div className="video-badges">
              <span className={`difficulty-badge ${video.difficulty.toLowerCase()}`}>
                {video.difficulty}
              </span>
              <span className="institution-badge">
                {video.institution}
              </span>
            </div>
          </div>

          <div className="channel-info-detailed">
            <div className="channel-header">
              <h3>{video.channel}</h3>
              <p className="course-title">{video.course}</p>
            </div>
          </div>

          <div className="video-description-detailed">
            <h4>About this lecture</h4>
            <p>{video.description}</p>

            <div className="video-links">
              <a
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-link"
              >
                🔗 Watch on YouTube
              </a>
              <Link
                to={`/playlist/${video.playlist}`}
                className="playlist-link"
              >
                📚 View Full Course Playlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="video-sidebar">
        <div className="related-videos">
          <h3>Related Videos</h3>
          {relatedVideos.length > 0 ? (
            relatedVideos.map(relatedVideo => (
              <Link
                key={relatedVideo.id}
                to={`/watch/${relatedVideo.id}`}
                className="related-video-item"
              >
                <div className="related-thumbnail">
                  <img
                    src={relatedVideo.thumbnail}
                    alt={relatedVideo.title}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/168x94/1a1a1a/ffffff?text=Video';
                    }}
                  />
                  <span className="related-duration">{relatedVideo.duration}</span>
                </div>
                <div className="related-info">
                  <h4 className="related-title">{relatedVideo.title}</h4>
                  <p className="related-channel">{relatedVideo.channel}</p>
                  <div className="related-meta">
                    <span>{relatedVideo.views}</span>
                    <span>{relatedVideo.uploadDate}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="no-related">No related videos found</p>
          )}
        </div>

        <div className="learning-progress">
          <h3>Learning Progress</h3>
          <div className="progress-tip">
            <h4>💡 Study Tip</h4>
            <p>Take notes while watching and try to work through the mathematical derivations yourself!</p>
          </div>

          <div className="next-steps">
            <h4>Next Steps</h4>
            <ul>
              <li>Review the course playlist</li>
              <li>Practice related problems</li>
              <li>Explore prerequisite topics if needed</li>
              <li>Move to the next difficulty level</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
