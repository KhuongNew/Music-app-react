function About() {
  return (
    <section className="simple-page about-page">
      <div className="section-heading">
        <div>
          <p className="section-tag">Thong tin</p>
          <h2>Ve MelodyStream</h2>
        </div>
      </div>

      <p className="about-note">
        MelodyStream la mot music web app nho duoc dung de thu nghiem giao dien nghe nhac, quan
        ly danh sach bai hat va ket noi API theo cach gan voi trai nghiem that hon. Thu vien cho
        phep them, sua, xoa bai hat tren mot backend ASP.NET Core va luu bang SQLite.
      </p>

      <div className="about-grid">
        <article className="about-card">
          <h3>Muc tieu</h3>
          <ul className="about-list">
            <li>Thu nghiem giao dien nghe nhac</li>
            <li>Quan ly danh sach bai hat</li>
            <li>Ket noi API ASP.NET Core + SQLite</li>
          </ul>
        </article>

        <article className="about-card">
          <h3>Cong nghe su dung</h3>
          <ul className="about-list">
            <li>React + Vite cho giao dien</li>
            <li>Axios cho request client</li>
            <li>ASP.NET Core Web API cho backend</li>
            <li>Entity Framework Core + SQLite cho du lieu</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default About;