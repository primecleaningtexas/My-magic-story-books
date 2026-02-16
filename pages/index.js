import Link from "next/link";
import Logo from "../components/Logo";
import { THEMES } from "../components/themes";

export default function Home() {
  return (
    <div className="container">
      <header className="nav">
        <Logo />
        <nav className="navLinks">
          <Link href="/create">Create Your Book</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="heroInner">
          <div>
            <div className="kicker">✨ Personalized • Premium • Magical</div>
            <h1 className="h1">Create a Personalized Storybook</h1>
            <p className="sub">
              Where your child becomes the hero of a magical adventure.
              Upload a photo, pick a theme, preview the book, and download your PDF.
            </p>

            <div className="ctaRow">
              <Link className="btnGold" href="/create">Create Your Book</Link>
              <a className="btnGhost" href="#themes">Browse Themes</a>
            </div>

            <div className="steps">
              <div className="step">📖 Choose a Story</div>
              <div className="step">📸 Upload & Personalize</div>
              <div className="step">👀 Preview</div>
              <div className="step">⬇️ Download PDF</div>
            </div>
          </div>

          <div className="heroArt" aria-label="Hero image" />
        </div>
      </section>

      <h2 id="themes" className="sectionTitle">Enchanting Stories For Every Child</h2>

      <div className="grid">
        {THEMES.map((t) => (
          <div key={t.id} className="card">
            <div className="badge" />
            <div className="cardTitle">{t.title}</div>
          </div>
        ))}
      </div>

      <div style={{ height: 30 }} />
      <Link className="btnGold" href="/create">Create Yours Now →</Link>
      <div style={{ height: 30 }} />
    </div>
  );
}
