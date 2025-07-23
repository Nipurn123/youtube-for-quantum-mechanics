import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './PlaylistView.css';

const PlaylistView = ({ playlists, videos }) => {
  const { playlistId } = useParams();
  const playlist = playlists.find(p => p.id === playlistId);

  if (!playlist) {
    return (
      <div className="playlist-view-container">
        <div className="playlist-not-found">
          <h2>Playlist not found</h2>
          <Link to="/" className="back-home">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const playlistVideos = videos.filter(video => video.playlist === playlistId);

  return (
    <div className="playlist-view-container">
      <div className="playlist-header">
        <div className="playlist-info">
          <h1 className="playlist-title">{playlist.title}</h1>
          <div className="playlist-meta">
            <span className="institution">{playlist.institution}</span>
            <span className="video-count">{playlist.videoCount} videos</span>
            <span className={`difficulty ${playlist.difficulty.toLowerCase()}`}>
              {playlist.difficulty}
            </span>
          </div>
          <p className="playlist-description">{playlist.description}</p>
        </div>

        <div className="playlist-actions">
          <button className="play-all-button">
            ▶ Play All Videos
          </button>
          <a
            href={`https://youtube.com/playlist?list=${playlist.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-playlist-link"
          >
            🔗 View on YouTube
          </a>
        </div>
      </div>

      <div className="playlist-content">
        <div className="playlist-videos">
          <h2>Course Videos ({playlistVideos.length} available)</h2>

          {playlistVideos.length > 0 ? (
            <div className="video-list">
              {playlistVideos.map((video, index) => (
                <div key={video.id} className="playlist-video-item">
                  <div className="video-number">{index + 1}</div>

                  <Link to={`/watch/${video.id}`} className="video-thumbnail-link">
                    <div className="video-thumbnail-small">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/120x68/1a1a1a/ffffff?text=Video';
                        }}
                      />
                      <div className="duration-small">{video.duration}</div>
                    </div>
                  </Link>

                  <div className="video-details-playlist">
                    <Link to={`/watch/${video.id}`} className="video-title-link">
                      <h3 className="video-title-playlist">{video.title}</h3>
                    </Link>
                    <p className="video-description-playlist">{video.description}</p>
                    <div className="video-meta-playlist">
                      <span className="views">{video.views}</span>
                      <span className="upload-date">{video.uploadDate}</span>
                    </div>
                  </div>

                  <div className="video-actions-playlist">
                    <Link to={`/watch/${video.id}`} className="watch-now-btn">
                      ▶ Watch
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-videos-available">
              <p>No videos available for this playlist in our collection.</p>
              <a
                href={`https://youtube.com/playlist?list=${playlist.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="view-full-playlist"
              >
                View complete playlist on YouTube
              </a>
            </div>
          )}
        </div>

        <div className="playlist-sidebar">
          <div className="learning-path-info">
            <h3>About This Course</h3>
            <div className="course-details">
              <div className="detail-item">
                <strong>Institution:</strong> {playlist.institution}
              </div>
              <div className="detail-item">
                <strong>Difficulty:</strong> {playlist.difficulty}
              </div>
              <div className="detail-item">
                <strong>Total Videos:</strong> {playlist.videoCount}
              </div>
              <div className="detail-item">
                <strong>Available Here:</strong> {playlistVideos.length}
              </div>
            </div>
          </div>

          <div className="study-recommendations">
            <h3>Study Recommendations</h3>
            <ul className="recommendations-list">
              <li>Watch videos in sequential order</li>
              <li>Take notes during lectures</li>
              <li>Pause to work through derivations</li>
              <li>Review prerequisite mathematics</li>
              <li>Practice problems after each lecture</li>
            </ul>
          </div>

          <div className="related-playlists">
            <h3>Related Courses</h3>
            {playlists
              .filter(p => p.id !== playlist.id && p.institution === playlist.institution)
              .slice(0, 3)
              .map(relatedPlaylist => (
                <Link
                  key={relatedPlaylist.id}
                  to={`/playlist/${relatedPlaylist.id}`}
                  className="related-playlist-item"
                >
                  <div className="related-playlist-info">
                    <h4>{relatedPlaylist.title}</h4>
                    <span className="related-difficulty">{relatedPlaylist.difficulty}</span>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
