export default function Home() {
  const themes = [
    { slug: "magical-adventure", title: "Magical Adventure" },
    { slug: "dreamland-journey", title: "Dreamland Journey" },
    { slug: "under-the-sea", title: "Under the Sea" },
    { slug: "space-explorer", title: "Space Explorer" },
    { slug: "kingdom-of-animals", title: "Kingdom of Animals" },
    { slug: "numbers-quest", title: "Numbers Quest" },
    { slug: "bedtime-adventure", title: "Bedtime Adventure" },
    { slug: "amazing-safari", title: "Amazing Safari" },
  ];

  return (
    <div className="page">
      {/* NAV */}
      <header className="topbar">
        <div className="brand">
          <span className="brandStar">★</span>
          <div className="brandText">
            <div className="brandName">My</div>
            <div className="brandName">Magic</div>
            <div className="brandName">Story</div>
            <div className="brandName">Book</div>
          </div>
        </div>

        <nav className="nav">
          <a className="navLink active" href="#home">
            Home
          </a>
          <a className="navLink" href="#books">
            Our Books
          </a>
          <a className="navLink" href="#reviews">
            Reviews
          </a>
          <a className="navLink" href="#faq">
            FAQ
          </a>
          <a className="navLink" href="#account">
            My Account
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="heroCard">
          <div className="heroGrid">
            <div className="heroLeft">
              <div className="kicker">PERSONALIZED STORIES</div>

              <h1 className="heroTitle">
                Create a <span className="gold">Personalized</span> Storybook
              </h1>

              <p className="heroSubtitle">
                Where your child becomes the hero of a magical adventure. Upload a photo,
                pick a theme, preview the book, and download your PDF.
              </p>

              <div className="heroCtas">
                <a className="btn primary" href="#create">
                  Create Your Book
                </a>
                <a className="btn" href="#books">
                  Browse Themes
                </a>
              </div>

              <div className="heroQuick">
                <a className="quick" href="#books">
                  <span className="ico">📖</span> Choose a Story
                </a>
                <a className="quick" href="#create">
                  <span className="ico">📷</span> Upload &amp; Personalize
                </a>
                <a className="quick" href="#preview">
                  <span className="ico">👀</span> Preview
                </a>
                <a className="quick" href="#download">
                  <span className="ico">⬇️</span> Download PDF
                </a>
              </div>
            </div>

            <div className="heroRight">
              <img className="heroImg" src="/hero.jpg" alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section id="books" className="section">
        <h2 className="sectionTitle">Enchanting Stories For Every Child</h2>
        <p className="sectionSub">
          Select the perfect story theme and make your child the hero!
        </p>

        <div className="grid">
          {themes.map((t) => (
            <a key={t.slug} className="card" href="#create" aria-label={t.title}>
              <div className="thumb">
                <img src={`/themes/${t.slug}.jpg`} alt={t.title} />
              </div>
              <div className="cardTitle">{t.title}</div>
            </a>
          ))}
        </div>

        <div className="center">
          <a className="btn primary big" href="#create">
            Create Yours Now →
          </a>
        </div>
      </section>

      {/* PLACEHOLDERS */}
      <section id="create" className="section small">
        <h3 className="miniTitle">Create Your Book</h3>
        <p className="miniText">
          (Aqui você conecta seu fluxo de upload / gerar book / preview.)
        </p>
      </section>

      <section id="reviews" className="section small">
        <h3 className="miniTitle">Reviews</h3>
        <p className="miniText">(Seção de reviews)</p>
      </section>

      <section id="faq" className="section small">
        <h3 className="miniTitle">FAQ</h3>
        <p className="miniText">(Seção FAQ)</p>
      </section>

      <section id="account" className="section small">
        <h3 className="miniTitle">My Account</h3>
        <p className="miniText">(Seção conta/login)</p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} My Magic Story Book
      </footer>
    </div>
  );
}
