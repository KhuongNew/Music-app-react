import { useEffect, useState } from 'react';
import { createSong, deleteSong, getSongs, updateSong } from '../api/songApi';

const emptyForm = {
  title: '',
  artist: '',
  duration: '',
};

function Library() {
  const [songs, setSongs] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  async function loadSongs() {
    try {
      setLoading(true);
      setError('');
      const data = await getSongs();
      setSongs(data);
    } catch {
      setError('Cannot load songs. Check that the ASP.NET API is running and the database is configured.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSongs();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    setMessage('');

    try {
      if (editingId) {
        await updateSong(editingId, form);
        setMessage('Song updated successfully.');
      } else {
        await createSong(form);
        setMessage('Song created successfully.');
      }

      resetForm();
      await loadSongs();
    } catch {
      setError('Request failed. Verify the API endpoint and SQL Server connection string.');
    } finally {
      setSubmitting(false);
    }
  }

  function handleEdit(song) {
    setEditingId(song.id);
    setForm({
      title: song.title,
      artist: song.artist,
      duration: song.duration,
    });
    setMessage('');
    setError('');
  }

  async function handleDelete(songId) {
    const shouldDelete = window.confirm('Delete this song?');

    if (!shouldDelete) {
      return;
    }

    try {
      await deleteSong(songId);
      setSongs((currentSongs) => currentSongs.filter((song) => song.id !== songId));

      if (editingId === songId) {
        resetForm();
      }

      setMessage('Song deleted successfully.');
      setError('');
    } catch {
      setError('Delete failed. Check the API and database connection.');
    }
  }

  return (
    <section className="library-page">
      <div className="section-heading">
        <div>
          <p className="section-tag">Axios CRUD Demo</p>
          <h2>Song Library</h2>
        </div>
        <button type="button" className="secondary-btn" onClick={loadSongs}>
          Refresh
        </button>
      </div>

      <div className="library-layout">
        <form className="song-form" onSubmit={handleSubmit}>
          <h3>{editingId ? 'Update song' : 'Add a new song'}</h3>

          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Example: Supernova"
            required
          />

          <label htmlFor="artist">Artist</label>
          <input
            id="artist"
            name="artist"
            value={form.artist}
            onChange={handleChange}
            placeholder="Example: aespa"
            required
          />

          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="Example: 3:15"
            required
          />

          <div className="form-actions">
            <button type="submit" className="play-btn" disabled={submitting}>
              {submitting ? 'Saving...' : editingId ? 'Save changes' : 'Create song'}
            </button>
            {editingId ? (
              <button type="button" className="secondary-btn" onClick={resetForm}>
                Cancel
              </button>
            ) : null}
          </div>

          {message ? <p className="status-message success">{message}</p> : null}
          {error ? <p className="status-message error">{error}</p> : null}
        </form>

        <div className="song-list-panel">
          <div className="song-list-header">
            <h3>Current songs</h3>
            <span>{songs.length} item(s)</span>
          </div>

          {loading ? <p className="muted-text">Loading songs...</p> : null}

          {!loading && songs.length === 0 ? (
            <p className="muted-text">No songs found yet. Use the form to create the first record.</p>
          ) : null}

          <div className="song-list">
            {songs.map((song) => (
              <article key={song.id} className="song-row">
                <div>
                  <h4>{song.title}</h4>
                  <p>{song.artist} - {song.duration}</p>
                </div>

                <div className="row-actions">
                  <button type="button" className="secondary-btn" onClick={() => handleEdit(song)}>
                    Edit
                  </button>
                  <button type="button" className="danger-btn" onClick={() => handleDelete(song.id)}>
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Library;
