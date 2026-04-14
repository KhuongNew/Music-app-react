import React from 'react';

function Library() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Thư Viện Của Tôi</h2>
      <p style={{ color: '#b3b3b3' }}>Bạn chưa có bài hát nào trong thư viện.</p>
      <button className="play-btn">Khám phá ngay</button>
    </div>
  );
}

export default Library;