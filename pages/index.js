// pages/index.js
import Head from "next/head";

export default function Home() {
  const themes = [
    { title: "Magical Adventure", file: "magical-adventure.jpg" },
    { title: "Dreamland Journey", file: "dreamland-journey.jpg" },
    { title: "Under the Sea", file: "under-the-sea.jpg" },
    { title: "Space Explorer", file: "space-explorer.jpg" },
    { title: "Kingdom of Animals", file: "kingdom-of-animals.jpg" },
    { title: "Numbers Quest", file: "numbers-quest.jpg" },
    { title: "Bedtime Adventure", file: "bedtime-adventure.jpg" },
    { title: "Amazing Safari", file: "amazing-safari.jpg" },
  ];

  return (
    <>
      <Head>
        <title>My Magic Story Book</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* TOP BAR */}
      <header style={styles.header}>
        <div style={styles.brand}>
          <span style={styles.star}>★</span>
          <div style={styles.brandText}>
            <div style={styles.brandLine}>My</div>
            <div style={styles.brandLine}>Magic</div>
            <div style={styles.brandLine}>Story</div>
            <div style={styles.brandLine}>Book</div>
          </div>
        </div>

        <nav style={styles.nav}>
          <a style={{ ...styles.navLink, ...styles.navActive }} href="#home">Home</a>
          <a style={styles.navLink} href="#books">Our Books</a>
          <a style={styles.navLink} href="#reviews">Reviews</a>
          <a style={styles.navLink} href="#faq">FAQ</a>
          <a style={styles.navLink} href="#account">My Account</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" style={styles.heroWrap}>
        <div style={styles.heroCard}>
          <div style={styles.heroLeft}>
            <div style={styles.smallCap}>PERSONALIZED STORIES</div>
            <h1 style={styles.h1}>
              Create a <span style={styles.gold}>Personalized</span> Storybook
            </h1>
            <p style={styles.heroP}>
              Where your child becomes the hero of a magical adventure. Upload a photo, pick a theme,
              preview the book, and download your PDF.
            </p>

            <div style={styles.heroButtons}>
              <button style={{ ...styles.btn, ...styles.btnPrimary }}>Create Your Book</button>
              <button style={{ ...styles.btn, ...styles.btnGhost }}>Browse Themes</button>
            </div>

            <div style={styles.quickGrid}>
              <div style={styles.quickItem}>📖 <b>Choose a Story</b></div>
              <div style={styles.quickItem}>📷 <b>Upload &amp; Personalize</b></div>
              <div style={styles.quickItem}>👀 <b>Preview</b></div>
              <div style={styles.quickItem}>⬇️ <b>Download PDF</b></div>
            </div>
          </div>

          <div style={styles.heroRight}>
            {/* Troque o src abaixo quando você tiver a imagem do “livro aberto”.
               Se você ainda não tem, pode deixar esse placeholder por enquanto. */}
            <img
              src="/hero.jpg"
              alt="Hero"
              style={styles.heroImg}
              onError={(e) => {
                // se não existir /public/hero.jpg, não quebra o layout
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section id="books" style={styles.section}>
        <h2 style={styles.h2}>Enchanting Stories For Every Child</h2>
        <p style={styles.sub}>
          Select the perfect story theme and make your child the hero!
        </p>

        <div style={styles.grid}>
          {themes.map((t) => (
            <div key={t.file} style={styles.card}>
              <div style={styles.imgBox}>
                {/* ✅ Aqui é o ponto principal: sempre /themes/... */}
                <img
                  src={`/themes/${t.file}`}
                  alt={t.title}
                  style={styles.img}
                  loading="lazy"
                />
              </div>
              <div style={styles.cardTitle}>{t.title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 18px",
    background: "rgba(235, 245, 255, 0.75)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },
  brand: { display: "flex", alignItems: "flex-start", gap: 10 },
  star: { fontSize: 18, color: "#c9a646", marginTop: 4 },
  brandText: { lineHeight: 1.0, fontFamily: "Georgia, serif", color: "#1f2a3a" },
  brandLine: { fontSize: 18, fontWeight: 700 },

  nav: { display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "flex-end" },
  navLink: {
    textDecoration: "none",
    color: "#243245",
    fontFamily: "Georgia, serif",
    fontWeight: 700,
    fontSize: 16,
    padding: "6px 8px",
    borderRadius: 10,
  },
  navActive: {
    boxShadow: "inset 0 -2px 0 rgba(201,166,70,0.9)",
  },

  heroWrap: {
    padding: "18px 14px 8px",
    background:
      "radial-gradient(1200px 600px at 30% 0%, rgba(255,255,255,0.9), rgba(214,236,255,0.35) 55%, rgba(255,255,255,1))",
  },
  heroCard: {
    maxWidth: 980,
    margin: "0 auto",
    background: "rgba(255,255,255,0.7)",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: 22,
    boxShadow: "0 18px 50px rgba(0,0,0,0.10)",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
  },
  heroLeft: { padding: 22 },
  heroRight: {
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroImg: {
    width: "100%",
    maxWidth: 420,
    height: "auto",
    borderRadius: 18,
    boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
  },
  smallCap: {
    fontSize: 12,
    letterSpacing: 1.2,
    fontWeight: 800,
    color: "rgba(31,42,58,0.65)",
    marginBottom: 10,
  },
  h1: {
    margin: "0 0 10px",
    fontFamily: "Georgia, serif",
    fontSize: 46,
    lineHeight: 1.02,
    color: "#1f2a3a",
  },
  gold: { color: "#c9a646" },
  heroP: {
    margin: "0 0 16px",
    color: "rgba(31,42,58,0.8)",
    fontSize: 18,
    lineHeight: 1.45,
    maxWidth: 520,
  },
  heroButtons: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 14 },
  btn: {
    border: "1px solid rgba(0,0,0,0.10)",
    padding: "12px 16px",
    borderRadius: 999,
    fontWeight: 800,
    cursor: "pointer",
    fontFamily: "Georgia, serif",
  },
  btnPrimary: {
    background: "linear-gradient(#e7c56a, #caa14b)",
    color: "#1f2a3a",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  },
  btnGhost: { background: "rgba(255,255,255,0.75)", color: "#243245" },

  quickGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginTop: 10,
  },
  quickItem: {
    background: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: 16,
    padding: "12px 12px",
    fontSize: 14,
    color: "#243245",
  },

  section: {
    padding: "16px 14px 40px",
    background: "linear-gradient(#ffffff, rgba(214,236,255,0.35))",
  },
  h2: {
    textAlign: "center",
    fontFamily: "Georgia, serif",
    fontSize: 44,
    margin: "18px 0 8px",
    color: "#1f2a3a",
  },
  sub: {
    textAlign: "center",
    margin: "0 0 18px",
    fontSize: 18,
    color: "rgba(31,42,58,0.72)",
  },

  grid: {
    maxWidth: 980,
    margin: "0 auto",
    display: "grid",
    gap: 14,
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  card: {
    background: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: 18,
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  },

  // ✅ Quadrado e com recorte bonito
  imgBox: {
    width: "100%",
    aspectRatio: "1 / 1",
    background: "rgba(0,0,0,0.04)",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  cardTitle: {
    padding: "12px 14px",
    textAlign: "center",
    fontFamily: "Georgia, serif",
    fontWeight: 800,
    fontSize: 18,
    color: "#243245",
  },
};
