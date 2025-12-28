import "./collective.css";

export default function CollectivePage() {
  return (
    <main className="collective-page">
      {/* HERO / INTRO */}
      <section className="collective-hero">
        <img
          src="/icons/hero.svg"
          alt="The Travelling Picture Book 2025"
          className="collective-title"
        />

        <div className="collective-text">
          <p>
            The Travelling Picture Book Project started as a simple idea and
            grew into a shared creative journey.
          </p>

          <p>
            The project includes two books, one travelling from north to south,
            and the other from south to north. Each book moves from one artist
            to another, with every participant adding a story, drawing or
            thought to its pages.
          </p>

          <p>
            As the books travel, they collect different voices, places, and
            moments. Together they celebrate collaboration and the joy of shared
            making.
          </p>
        </div>
      </section>

      {/* BOOK 01 */}
      <section className="book-section">
        <span className="book-label">BOOK 01</span>

        <div className="artist-layout">
          {/* LEFT — ARTWORK */}
          <div className="artist-artwork">
            <img src="icons/art.jpg" alt="Artwork by Priya Kuriyan" />
          </div>

          {/* RIGHT — ARTIST INFO */}
          <aside className="artist-meta">
            <h3 className="artist-name">PRIYA KURIYAN</h3>

            <div className="hand-grid">
              {Array.from({ length: 18 }).map((_, i) => (
                <img
                  key={i}
                  src="icons/write.svg"
                  alt=""
                  className="hand-icon"
                />
              ))}
            </div>

            <img
              src="/icons/artist.jpg"
              alt="Priya Kuriyan"
              className="artist-photo"
            />
          </aside>
        </div>
      </section>
    </main>
  );
}
