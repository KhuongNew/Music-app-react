import React from 'react';

function About() {
  return (
    <div style={{ color: '#ffffff', padding: '20px 0' }}>
      <h2>Giới thiệu về MelodyStream</h2>
      <p style={{ color: '#b3b3b3', marginTop: '15px', lineHeight: '1.6' }}>
        MelodyStream là nền tảng nghe nhạc trực tuyến được xây dựng bằng ReactJS. <br />
        Dự án này là bài tập thực hành môn Lập trình Web, giúp làm quen với việc chia component, 
        thiết kế giao diện bằng CSS và chuyển trang không cần tải lại (SPA) thông qua React Router.
      </p>
      
      <h3 style={{ marginTop: '30px', marginBottom: '10px' }}>Công nghệ sử dụng:</h3>
      <ul style={{ color: '#b3b3b3', marginLeft: '20px', lineHeight: '1.8' }}>
        <li>ReactJS (Vite)</li>
        <li>React Router DOM</li>
        <li>CSS3</li>
      </ul>
    </div>
  );
}

export default About;