import Head from "next/head";

export default function Home() {
  const themes = [
    { id: "magical-adventure", title: "Magical Adventure", img: "/themes/magical-adventure.jpg" },
    { id: "dreamland-journey", title: "Dreamland Journey", img: "/themes/dreamland-journey.jpg" },
    { id: "under-the-sea", title: "Under the Sea", img: "/themes/under-the-sea.jpg" },
    { id: "space-explorer", title: "Space Explorer", img: "/themes/space-explorer.jpg" },
    { id: "kingdom-of-animals", title: "Kingdom of Animals", img: "/themes/kingdom-of-animals.jpg" },
    { id: "numbers-quest", title: "Numbers Quest", img: "/themes/numbers-quest.jpg" },
    { id: "bedtime-adventure", title: "Bedtime Adventure", img: "/themes/bedtime-adventure.jpg" },
    { id: "amazing-safari", title: "Amazing Safari", img: "/themes/amazing-safari.jpg" },
  ];

  return (
    <>
      <Head>
        <title>My Magic Story Book</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* NAV */}
      <header style={styles.header}>
        <div style={styles.navInner}>
          <div style={styles.brand}>
            <span style={styles.star}>★</span>
            <span style={styles.brandText}>My Magic Story Book</span>
          </div>

          <nav style={styles.nav}>
            <a style={styles.navLink} href="#home">Home</a>
            <a style={styles.navLink} href="#books">Our Books</a>
            <a style={styles.navLink} href="#reviews">Reviews</a>
            <a style={styles.navLink} href="#faq">FAQ</a>
            <a style={styles.navLink} href="#account">My Account</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main id="home" style={styles.page}>
        <section style={styles.heroWrap}>
          <div style={styles.heroCard}>
            <div>
              <div style={styles.heroKicker}>PERSONALIZED STORIES</div>

              <h1 style={styles.heroTitle}>
                Create a <span style={styles.gold}>Personalized</span> Storybook
              </h1>

              <p style={styles.heroText}>
                Where your child becomes the hero of a magical adventure.
                Upload a photo, pick a theme, preview the book, and download your PDF.
              </p>

              <div style={styles.heroButtons}>
                <button style={styles.btnPrimary}>Create Your Book</button>
                <button style={styles.btnSecondary}>Browse Themes</button>
              </div>

              <div style={styles.actionGrid}>
                <div style={styles.actionCard}>
                  <div style={styles.actionIcon}>📖</div>
                  <div style={styles.actionTitle}>Choose a Story</div>
                </div>
                <div style={styles.actionCard}>
                  <div style={styles.actionIcon}>📷</div>
                  <div style={styles.actionTitle}>Upload & Personalize</div>
                </div>
                <div style={styles.actionCard}>
                  <div style={styles.actionIcon}>👀</div>
                  <div style={styles.actionTitle}>Preview</div>
                </div>
                <div style={styles.actionCard}>
                  <div style={styles.actionIcon}>⬇️</div>
                  <div style={styles.actionTitle}>Download PDF</div>
                </div>
              </div>
            </div>

            <div style={styles.heroImageWrap}>
              <img
                src="/hero-book.png"
                alt="Open storybook"
                style={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* THEMES */}
        <section id="books" style={styles.section}>
          <h2 style={styles.sectionTitle}>Enchanting Stories For Every Child</h2>
          <p style={styles.sectionSubtitle}>
            Select the perfect story theme and make your child the hero!
          </p>

          <div style={styles.themeGrid}>
            {themes.map((t) => (
              <div key={t.id} style={styles.themeCard}>
                <div style={styles.themeImgWrap}>
                  <img
                    src={t.img}
                    alt={t.title}
                    style={styles.themeImg}
                    onError={(e) => {
                      // se não achar imagem, mostra borda e some imagem
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.style.background = "rgba(255,255,255,0.4)";
                      e.currentTarget.parentElement.style.border = "1px dashed rgba(0,0,0,0.2)";
                    }}
                  />
                </div>
                <div style={styles.themeName}>{t.title}</div>
              </div>
            ))}
          </div>

          <div style={styles.bottomCtaWrap}>
            <button style={styles.bigCta}>Create Yours Now →</button>
          </div>
        </section>

        {/* placeholders */}
        <section id="reviews" style={{ height: 40 }} />
        <section id="faq" style={{ height: 40 }} />
        <section id="account" style={{ height: 40 }} />
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #fff5de, #e6f2ff 55%, #ffffff 100%)",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(230, 242, 255, 0.7)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },

  navInner: {
    maxWidth: 1150,
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  star: { color: "#c9a646", fontSize: 20 },

  brandText: {
    fontFamily: "Georgia, serif",
    fontWeight: 800,
    letterSpacing: 0.2,
    color: "#1f2a3a",
    fontSize: 18,
  },

  nav: {
    display: "flex",
    gap: 18,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },

  navLink: {
    fontFamily: "Georgia, serif",
    fontWeight: 700,
    color: "#1f2a3a",
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: 999,
  },

  heroWrap: {
    padding: "26px 16px 10px",
  },

  heroCard: {
    maxWidth: 1150,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 28,
    alignItems: "center",
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(12px)",
    borderRadius: 30,
    padding: 26,
    boxShadow: "0 22px 70px rgba(0,0,0,0.10)",
    border: "1px solid rgba(255,255,255,0.7)",
  },

  heroKicker: {
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: 800,
    color: "rgba(0,0,0,0.55)",
    marginBottom: 10,
  },

  heroTitle: {
    fontFamily: "Georgia, serif",
    fontSize: 54,
    lineHeight: 1.05,
    color: "#1f2a3a",
    margin: "0 0 14px 0",
  },

  gold: { color: "#c9a646" },

  heroText: {
    fontSize: 18,
    lineHeight: 1.55,
    color: "rgba(0,0,0,0.75)",
    margin: "0 0 18px 0",
    maxWidth: 580,
  },

  heroButtons: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 },

  btnPrimary: {
    background: "linear-gradient(#e7c56a, #caa14b)",
    border: "none",
    padding: "14px 22px",
    borderRadius: 999,
    fontWeight: 800,
    fontSize: 16,
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    color: "#1f2a3a",
  },

  btnSecondary: {
    background: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(0,0,0,0.12)",
    padding: "14px 22px",
    borderRadius: 999,
    fontWeight: 800,
    fontSize: 16,
    cursor: "pointer",
    color: "#1f2a3a",
  },

  actionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
    maxWidth: 520,
  },

  actionCard: {
    background: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: 18,
    padding: "14px 14px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  },

  actionIcon: { fontSize: 22 },

  actionTitle: {
    fontFamily: "Georgia, serif",
    fontWeight: 800,
    color: "#1f2a3a",
  },

  heroImageWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  heroImage: {
    width: "100%",
    maxWidth: 440,
    borderRadius: 22,
    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
  },

  section: {
    padding: "26px 16px 60px",
  },

  sectionTitle: {
    textAlign: "center",
    fontFamily: "Georgia, serif",
    fontSize: 46,
    color: "#1f2a3a",
    margin: "10px 0 10px",
  },

  sectionSubtitle: {
    textAlign: "center",
    fontSize: 18,
    color: "rgba(0,0,0,0.65)",
    margin: "0 0 22px",
  },

  themeGrid: {
    maxWidth: 1150,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 16,
  },

  themeCard: {
    background: "rgba(255,255,255,0.75)",
    borderRadius: 26,
    padding: 14,
    boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
    border: "1px solid rgba(255,255,255,0.7)",
  },

  themeImgWrap: {
    width: "100%",
    aspectRatio: "1 / 1", // QUADRADO
    borderRadius: 18,
    overflow: "hidden",
    background: "rgba(255,255,255,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  themeImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  themeName: {
    marginTop: 12,
    textAlign: "center",
    fontFamily: "Georgia, serif",
    fontWeight: 900,
    fontSize: 18,
    color: "#1f2a3a",
  },

  bottomCtaWrap: { display: "flex", justifyContent: "center", marginTop: 24 },

  bigCta: {
    background: "linear-gradient(#e7c56a, #caa14b)",
    border: "none",
    padding: "14px 26px",
    borderRadius: 999,
    fontWeight: 900,
    fontSize: 18,
    cursor: "pointer",
    boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
    color: "#1f2a3a",
  },
};
