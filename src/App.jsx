import { Link, Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import Charts from './pages/Charts';
import Home from './pages/Home';
import Library from './pages/Library';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="music-app-container">
      <header className="header">
        <h1 className="logo">MelodyStream</h1>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Kham pha
              </Link>
            </li>
            <li>
              <Link to="/charts" className={location.pathname === '/charts' ? 'active' : ''}>
                BXH
              </Link>
            </li>
            <li>
              <Link to="/library" className={location.pathname === '/library' ? 'active' : ''}>
                Thu vien
              </Link>
            </li>
            <li>
              <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>
                Gioi thieu
              </Link>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Tim bai hat, nghe si, playlist..." />
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </main>

      <footer className="music-player">
        <div className="now-playing">
          <div className="mini-cover placeholder-mini"></div>
          <div className="track-info">
            <h4>Afterglow FM</h4>
            <p>Editorial pick</p>
          </div>
        </div>
        <div className="player-controls">
          <button type="button" className="control-btn">
            Prev
          </button>
          <button type="button" className="control-btn play-pause">
            Play
          </button>
          <button type="button" className="control-btn">
            Next
          </button>
        </div>
        <div className="progress-bar">
          <span className="time">01:20</span>
          <div className="progress-track">
            <div className="progress-fill"></div>
          </div>
          <span className="time">03:45</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
