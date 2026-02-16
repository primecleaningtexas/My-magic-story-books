import Head from "next/head";

const THEMES = [
  { id: "magical-adventure", title: "Magical Adventure", img: "/themes/magical-adventure.jpg" },
  { id: "dreamland-journey", title: "Dreamland Journey", img: "/themes/dreamland-journey.jpg" },
  { id: "under-the-sea", title: "Under the Sea", img: "/themes/under-the-sea.jpg" },
  { id: "space-explorer", title: "Space Explorer", img: "/themes/space-explorer.jpg" },
  { id: "kingdom-of-animals", title: "Kingdom of Animals", img: "/themes/kingdom-of-animals.jpg" },
  { id: "numbers-quest", title: "Numbers Quest", img: "/themes/numbers-quest.jpg" },
  { id: "bedtime-adventure", title: "Bedtime Adventure", img: "/themes/bedtime-adventure.jpg" },
  { id: "amazing-safari", title: "Amazing Safari", img: "/themes/amazing-safari.jpg" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>My Magic Story Book</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="topbar">
        <div className="topbarInner">
          <div className="brand">
            <span className="brandStar">★</span>
            <div className="brandText">
              <div className="brandName">My Magic</div>
              <div className="brandName">Story Book</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#home" className="navLink active">Home</a>
            <a href="#books" className="navLink">Our Books</a>
            <a href="#reviews" className="navLink">Reviews</a>
            <a href="#faq" className="navLink">FAQ</a>
            <a href="#account" className="navLink">My Account</a>
          </nav>
        </div>
      </header>

      <main id="home">
        {/* HERO */}
        <section className="hero">
          <div className="heroCard">
            <div className="heroGrid">
              <div className="heroLeft">
                <div className="kicker">PERSONALIZED STORIES</div>
                <h1 className="heroTitle">
                  Create a <span className="gold">Personalized</span> Storybook
                </h1>
                <p className="heroSubtitle">
                  Where your child becomes the hero of a magical adventure. Upload a photo, pick a theme,
                  preview the book, and download your PDF.
                </p>

                <div className="heroButtons">
                  <a className="btnPrimary" href="#books">Create Your Book</a>
                  <a className="btnGhost" href="#books">Browse Themes</a>
                </div>

                {/* “Choose a story / Upload / Preview / Download” = passos (podem ser botões sim) */}
                <div className="steps">
                  <div className="step">
                    <div className="stepIcon">📖</div>
                    <div className="stepLabel">Choose a Story</div>
                  </div>
                  <div className="step">
                    <div className="stepIcon">📷</div>
                    <div className="stepLabel">Upload Photo<br />&amp; Personalize</div>
                  </div>
                  <div className="step">
                    <div className="stepIcon">👀</div>
                    <div className="stepLabel">Preview Your Book</div>
                  </div>
                  <div className="step">
                    <div className="stepIcon">⬇️</div>
                    <div className="stepLabel">Download PDF</div>
                  </div>
                </div>
              </div>

              <div className="heroRight">
                {/* Fundo / imagem grande */}
                <div className="heroArt">
                  <img className="heroBg" src="/hero.jpg" alt="Hero background" />
                  {/* Livro aberto por cima (opcional) */}
                  <img className="bookOpen" src="/book-open.png" alt="Open book" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THEMES */}
        <section id="books" className="section">
          <div className="sectionTitleWrap">
            <h2 className="sectionTitle">Enchanting Stories For Every Child</h2>
            <p className="sectionSubtitle">Select the perfect story theme and make your child the hero!</p>
          </div>

          <div className="themeGrid">
            {THEMES.map((t) => (
              <div className="themeCard" key={t.id}>
                <div className="coverWrap">
                  {/* ISSO AQUI resolve: capa quadrada + não estica + não fica gigante */}
                  <img className="coverImg" src={t.img} alt={t.title} />
                </div>
                <div className="themeName">{t.title}</div>
              </div>
            ))}
          </div>

          <div className="centerCta">
            <a className="btnPrimary big" href="#books">Create Yours Now →</a>
          </div>
        </section>

        {/* placeholders */}
        <section id="reviews" className="section thin">
          <h3 className="miniTitle">Reviews</h3>
          <p className="miniText">Coming soon…</p>
        </section>

        <section id="faq" className="section thin">
          <h3 className="miniTitle">FAQ</h3>
          <p className="miniText">Coming soon…</p>
        </section>

        <section id="account" className="section thin">
          <h3 className="miniTitle">My Account</h3>
          <p className="miniText">Coming soon…</p>
        </section>

        <footer className="footer">© {new Date().getFullYear()} My Magic Story Book</footer>
      </main>
    </>
  );
}
