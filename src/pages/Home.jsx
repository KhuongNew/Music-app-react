import { Link } from 'react-router-dom';

const featuredMixes = [
  {
    accent: 'Neon',
    title: 'Midnight Run',
    description: 'Synth-pop, city lights va nhung ban hook nghe la dinh.',
  },
  {
    accent: 'Velvet',
    title: 'Cham Nhe Thoi',
    description: 'R&B, pop ballad va nhung bai hat de mo len luc 1AM.',
  },
  {
    accent: 'Heat',
    title: 'Tap Trung 90 Phut',
    description: 'Lo-fi, ambient va beat nhe de lam viec that su co nhip.',
  },
];

const moodCollections = [
  {
    label: 'Cho buoi toi',
    title: 'Nhac de di xe khong can noi gi',
    description: 'Groove cham, bass day va giai dieu de thanh pho trong hon.',
  },
  {
    label: 'Dang hot',
    title: 'Top bai moi duoc luu nhieu nhat',
    description: 'Nhung track dang len feed cua moi nguoi trong tuan nay.',
  },
  {
    label: 'Thu gian',
    title: 'Playlist nhe de reset dau oc',
    description: 'Acoustic, chill pop va mot it piano de ha nhiet nhanh.',
  },
];

function Home() {
  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-copy">
          <p className="section-tag">MelodyStream Selection</p>
          <h2>Bat dung bai hat cho dung tam trang.</h2>
          <p className="hero-description">
            Tu playlist nghe khi lam viec den nhung ban hit de mo that lon, MelodyStream gom
            nhac theo cam xuc thay vi chi liet ke bai hat.
          </p>

          <div className="hero-actions">
            <Link to="/library" className="play-btn hero-primary-link">
              Mo thu vien
            </Link>
            <Link to="/charts" className="hero-secondary-link">
              Xem bang xep hang
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>24</strong>
              <span>playlist moi moi tuan</span>
            </div>
            <div>
              <strong>8</strong>
              <span>mood collections duoc chon san</span>
            </div>
            <div>
              <strong>HD</strong>
              <span>chat luong stream on dinh</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="spotlight-card main">
            <span className="spotlight-badge">Featured tonight</span>
            <h3>Afterglow FM</h3>
            <p>Nu-disco, alt-pop va electro nhe cho buoi toi muon.</p>
            <div className="spotlight-footer">
              <span>32 tracks</span>
              <span>2h 14m</span>
            </div>
          </div>
          <div className="spotlight-card side top">
            <span className="mini-label">New release</span>
            <strong>Saigon Rooftops</strong>
            <p>Indie pop Viet cho nhung dem gon gio.</p>
          </div>
          <div className="spotlight-card side bottom">
            <span className="mini-label">Picked for you</span>
            <strong>Soft Focus</strong>
            <p>Nhac nhe, it loi, de tap trung that lau.</p>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="section-title-row">
          <div>
            <p className="section-tag muted">Goi y noi bat</p>
            <h3>Nghe gi hom nay</h3>
          </div>
          <Link to="/charts" className="text-link">
            Mo danh sach
          </Link>
        </div>

        <div className="mix-grid">
          {featuredMixes.map((mix) => (
            <article key={mix.title} className="mix-card">
              <div className="mix-cover">
                <span>{mix.accent}</span>
              </div>
              <h4>{mix.title}</h4>
              <p>{mix.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mood-section">
        <div className="section-title-row">
          <div>
            <p className="section-tag muted">Theo khong khi</p>
            <h3>Chon nhanh theo mood</h3>
          </div>
        </div>

        <div className="mood-list">
          {moodCollections.map((collection) => (
            <article key={collection.title} className="mood-card">
              <span className="mood-chip">{collection.label}</span>
              <div>
                <h4>{collection.title}</h4>
                <p>{collection.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
