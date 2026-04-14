import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Charts from './pages/Charts';
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
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/charts" className={location.pathname === '/charts' ? 'active' : ''}>
                Bảng xếp hạng
              </Link>
            </li>
            <li>
              <Link to="/library" className={location.pathname === '/library' ? 'active' : ''}>
                Thư viện
              </Link>
            </li>
            <li>
              <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>
                Giới thiệu
              </Link>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm bài hát, nghệ sĩ..." />
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
            <h4>Supernova</h4>
            <p>aespa</p>
          </div>
        </div>
        <div className="player-controls">
          <button className="control-btn">⏮</button>
          <button className="control-btn play-pause">▶</button>
          <button className="control-btn">⏭</button>
        </div>
        <div className="progress-bar">
          <span className="time">1:20</span>
          <div className="progress-track"><div className="progress-fill"></div></div>
          <span className="time">3:45</span>
        </div>
      </footer>
    </div>
  )
}

export default App;