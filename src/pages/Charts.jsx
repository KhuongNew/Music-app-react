const chartItems = [
  {
    title: 'Supernova',
    artist: 'aespa',
    note: 'No. 1',
  },
  {
    title: 'Armageddon',
    artist: 'aespa',
    note: 'No. 2',
  },
  {
    title: 'Hay Trao Cho Anh',
    artist: 'Son Tung M-TP',
    note: 'Viet top',
  },
];

function Charts() {
  return (
    <section className="simple-page charts-page">
      <div className="section-heading">
        <div>
          <p className="section-tag">Bang xep hang</p>
          <h2>Trending charts</h2>
        </div>
        <span className="muted-text">Cap nhat moi tuan</span>
      </div>

      <div className="charts-list">
        {chartItems.map((track, index) => (
          <article key={track.title} className="chart-row">
            <span className="chart-rank">{String(index + 1).padStart(2, '0')}</span>
            <div className="chart-meta">
              <h4>{track.title}</h4>
              <p>{track.artist}</p>
            </div>
            <span className="chart-tag">{track.note}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Charts;