import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import VideoPlayer from './components/VideoPlayer';
import PlaylistView from './components/PlaylistView';
import { quantumVideos, categories, institutions, playlists } from './data/quantumVideos';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedInstitution, setSelectedInstitution] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredVideos = quantumVideos.filter(video => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesInstitution = selectedInstitution === 'All' || video.institution === selectedInstitution;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.channel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesInstitution && matchesSearch;
  });

  return (
    <Router>
      <div className="app">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="app-body">
          <Sidebar
            isOpen={sidebarOpen}
            categories={categories}
            institutions={institutions}
            selectedCategory={selectedCategory}
            selectedInstitution={selectedInstitution}
            setSelectedCategory={setSelectedCategory}
            setSelectedInstitution={setSelectedInstitution}
            playlists={playlists}
          />

          <main className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <VideoGrid
                    videos={filteredVideos}
                    selectedCategory={selectedCategory}
                    selectedInstitution={selectedInstitution}
                  />
                }
              />
              <Route
                path="/watch/:videoId"
                element={<VideoPlayer videos={quantumVideos} />}
              />
              <Route
                path="/playlist/:playlistId"
                element={<PlaylistView playlists={playlists} videos={quantumVideos} />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
