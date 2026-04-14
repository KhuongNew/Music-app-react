import React from 'react';

function Home() {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-text">
          <h2>Hòa mình vào âm nhạc</h2>
          <p>Thưởng thức hàng triệu bài hát mới nhất với chất lượng cao.</p>
          <button className="play-btn">Nghe Ngay</button>
        </div>
      </section>

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
    </>
  );
}

export default Home;