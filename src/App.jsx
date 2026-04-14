import './App.css'

function App() {
  return (
    <div className="music-app-container">
      {/* Header / Thanh điều hướng */}
      <header className="header">
        <h1 className="logo">MelodyStream</h1>
        <nav className="nav-menu">
          <ul>
            <li><a href="#home" className="active">Khám phá</a></li>
            <li><a href="#charts">Bảng xếp hạng</a></li>
            <li><a href="#library">Thư viện của tôi</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm bài hát, nghệ sĩ..." />
        </div>
      </header>

      {/* Nội dung chính */}
      <main className="main-content">
        <section className="hero-banner">
          <div className="hero-text">
            <h2>Hòa mình vào âm nhạc</h2>
            <p>Thưởng thức hàng triệu bài hát mới nhất với chất lượng cao.</p>
            <button className="play-btn">Nghe Ngay</button>
          </div>
        </section>

        {/* Danh sách Playlist */}
        <section className="playlist-section">
          <h3>Playlist Nổi Bật</h3>
          <div className="card-grid">
            <div className="music-card">
              <div className="cover placeholder">Cover 1</div>
              <h4>K-Pop Dance</h4>
              <p>aespa, Hearts2Hearts, ...</p>
            </div>
            <div className="music-card">
              <div className="cover placeholder">Cover 2</div>
              <h4>J-Pop Idols</h4>
              <p>Hinatazaka46, ...</p>
            </div>
            <div className="music-card">
              <div className="cover placeholder">Cover 3</div>
              <h4>Top Hits Việt Nam</h4>
              <p>Những bản hit đình đám nhất</p>
            </div>
            <div className="music-card">
              <div className="cover placeholder">Cover 4</div>
              <h4>Acoustic Thư Giãn</h4>
              <p>Nhẹ nhàng và sâu lắng</p>
            </div>
          </div>
        </section>
      </main>

      {/* Thanh phát nhạc (Music Player) ở đáy màn hình */}
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

export default App