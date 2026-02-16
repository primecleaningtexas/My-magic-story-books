// pages/index.js
import styles from "../styles/Home.module.css";

const THEMES = [
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
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.nav}>
          <div className={styles.brand}>
            <span className={styles.brandIcon}>⭐</span>
            <span>My Magic Story Book</span>
          </div>

          <nav className={styles.menu}>
            <a href="#home">Home</a>
            <a href="#themes">Our Books</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
            <a href="#account">My Account</a>
          </nav>
        </header>

        <section id="home" className={styles.hero}>
          <div>
            <div className={styles.kicker}>Personalized stories</div>

            <h1 className={styles.h1}>
              Create a <span>Personalized</span> Storybook
            </h1>

            <p className={styles.sub}>
              Where your child becomes the hero of a magical adventure. Upload a photo,
              pick a theme, preview the book, and download your PDF.
            </p>

            <div className={styles.ctaRow}>
              <a className={styles.btnGold} href="/create">Create Your Book</a>
              <a className={styles.btnGhost} href="#themes">Browse Themes</a>
            </div>

            <div className={styles.steps}>
              <div className={styles.step}>📖 Choose a Story</div>
              <div className={styles.step}>📷 Upload &amp; Personalize</div>
              <div className={styles.step}>👀 Preview</div>
              <div className={styles.step}>⬇️ Download PDF</div>
            </div>
          </div>

          <div className={styles.heroArt} aria-label="Hero image">
            {/* IMPORTANTE: /public/hero.jpg => no código é /hero.jpg */}
            <img src="/hero.jpg" alt="Hero" />
          </div>
        </section>

        <div id="themes" className={styles.sectionTitleWrap}>
          <h2 className={styles.sectionTitle}>Enchanting Stories For Every Child</h2>
          <p className={styles.sectionSub}>
            Select the perfect story theme and make your child the hero!
          </p>
        </div>

        <section className={styles.grid}>
          {THEMES.map((t) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.thumb}>
                {/* IMPORTANTE: /public/themes/xxx.jpg => no código é /themes/xxx.jpg */}
                <img
                  src={`/themes/${t.id}.jpg`}
                  alt={t.title}
                  loading="lazy"
                  onError={(e) => {
                    // mostra no console e evita quebrar feio
                    e.currentTarget.style.opacity = "0.15";
                  }}
                />
              </div>
              <div className={styles.cardTitle}>{t.title}</div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
