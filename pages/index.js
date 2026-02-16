// pages/index.js
import Head from "next/head";

const themes = [
  { id: "magical-adventure", title: "Magical Adventure" },
  { id: "dreamland-journey", title: "Dreamland Journey" },
  { id: "under-the-sea", title: "Under the Sea" },
  { id: "space-explorer", title: "Space Explorer" },
  { id: "kingdom-of-animals", title: "Kingdom of Animals" },
  { id: "numbers-quest", title: "Numbers Quest" },
  { id: "bedtime-adventure", title: "Bedtime Adventure" },
  { id: "amazing-safari", title: "Amazing Safari" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>My Magic Story Book</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="topbar">
        <div className="brand">
          <span className="star">★</span>
          <span className="brandText">My Magic Story Book</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#books">Our Books</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
          <a href="#account">My Account</a>
        </nav>
      </header>

      {/* HERO com o background storybook-bg.jpg */}
      <section id="home" className="hero">
        <div className="heroOverlay">
          <div className="heroCard">
            <div className="heroKicker">PERSONALIZED STORIES</div>
            <h1 className="heroTitle">
              Create a <span className="gold">Personalized</span> Storybook
            </h1>
            <p className="heroSub">
              Where your child becomes the hero of a magical adventure. Upload a photo, pick
              a theme, preview the book, and download your PDF.
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="#books">Create Your Book</a>
              <a className="btnSecondary" href="#books">Browse Themes</a>
            </div>

            <div className="miniSteps">
              <div className="step">📖 Choose a Story</div>
              <div className="step">📷 Upload & Personalize</div>
              <div className="step">👀 Preview</div>
              <div className="step">⬇️ Download PDF</div>
            </div>

            <div className="heroImageWrap">
              {/* Se quiser trocar essa imagem, é só substituir o hero.jpg */}
              <img className="heroImage" src="/hero.jpg" alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      <main id="books" className="section">
        <h2 className="sectionTitle">Enchanting Stories For Every Child</h2>
        <p className="sectionSubtitle">Select the perfect story theme and make your child the hero!</p>

        <div className="grid">
          {themes.map((t) => (
            <div key={t.id} className="card">
              <div className="thumb">
                {/* ISSO é o que faz aparecer a imagem do /public/themes/ */}
                <img src={`/themes/${t.id}.jpg`} alt={t.title} />
              </div>
              <div className="cardTitle">{t.title}</div>
            </div>
          ))}
        </div>

        <div className="ctaBottom">
          <a className="btnPrimary big" href="#books">Create Yours Now →</a>
        </div>
      </main>
    </>
  );
}
