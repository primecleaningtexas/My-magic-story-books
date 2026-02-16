export default function Home() {
  const THEMES = [
    { id: "magical", title: "Magical Adventure", img: "/themes/magical-adventure.jpg" },
    { id: "dreamland", title: "Dreamland Journey", img: "/themes/dreamland-journey.jpg" },
    { id: "sea", title: "Under the Sea", img: "/themes/under-the-sea.jpg" },
    { id: "space", title: "Space Explorer", img: "/themes/space-explorer.jpg" },
    { id: "animals", title: "Kingdom of Animals", img: "/themes/kingdom-of-animals.jpg" },
    { id: "numbers", title: "Numbers Quest", img: "/themes/numbers-quest.jpg" },
    { id: "bedtime", title: "Bedtime Adventure", img: "/themes/bedtime-adventure.jpg" },
    { id: "safari", title: "Amazing Safari", img: "/themes/amazing-safari.jpg" },
  ];

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brandStar">★</span>
          <span className="brandText">
            My Magic<br />Story Book
          </span>
        </div>

        <nav className="nav">
          <a href="#" className="navLink active">Home</a>
          <a href="#books" className="navLink">Our Books</a>
          <a href="#reviews" className="navLink">Reviews</a>
          <a href="#faq" className="navLink">FAQ</a>
          <a href="#account" className="navLink">My Account</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="heroInner">
            <div className="heroLeft">
              <div className="kicker">PERSONALIZED STORIES</div>

              <h1 className="heroTitle">
                Create a <span className="gold">Personalized</span><br />
                Storybook
              </h1>

              <p className="heroSubtitle">
                Where your child becomes the hero of a magical adventure.
                Upload a photo, pick a theme, preview the book, and download your PDF.
              </p>

              <div className="ctaRow">
                <a className="btnGold" href="/create">Create Your Book</a>
                <a className="btnGhost" href="#themes">Browse Themes</a>
              </div>

              <div className="steps">
                <div className="step"><span className="stepIco">📖</span> Choose a Story</div>
                <div className="arrow">→</div>
                <div className="step"><span className="stepIco">📷</span> Upload Photo &amp; Personalize</div>
                <div className="arrow">→</div>
                <div className="step"><span className="stepIco">👀</span> Preview Your Book</div>
                <div className="arrow">→</div>
                <div className="step"><span className="stepIco">⬇️</span> Download PDF</div>
              </div>
            </div>

            <div className="heroRight" aria-label="Hero art">
              {/* Se você tiver uma imagem “book-open.png”, troque abaixo por /book-open.png */}
              <div className="bookFrame">
                <img className="heroImg" src="/hero.jpg" alt="Hero" />
              </div>
            </div>
          </div>
        </section>

        {/* THEMES */}
        <section id="themes" className="themes">
          <div className="themesHeader">
            <h2 className="themesTitle">Enchanting Stories For Every Child</h2>
            <p className="themesSub">
              Select the perfect story theme and make your child the hero!
            </p>
          </div>

          <div className="grid" id="books">
            {THEMES.map((t) => (
              <div key={t.id} className="card">
                <div className="cover">
                  <img src={t.img} alt={t.title} loading="lazy" />
                </div>
                <div className="cardLabel">{t.title}</div>
              </div>
            ))}
          </div>

          <div className="bottomCta">
            <a className="btnGold big" href="/create">Create Yours Now →</a>
          </div>
        </section>
      </main>
    </div>
  );
}
