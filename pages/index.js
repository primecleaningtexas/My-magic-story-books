import Link from "next/link";

const THEMES = [
  { title: "Magical Adventure", image: "/themes/magical-adventure.jpg" },
  { title: "Dreamland Journey", image: "/themes/dreamland-journey.jpg" },
  { title: "Under the Sea", image: "/themes/under-the-sea.jpg" },
  { title: "Space Explorer", image: "/themes/space-explorer.jpg" },
  { title: "Kingdom of Animals", image: "/themes/kingdom-of-animals.jpg" },
  { title: "Numbers Quest", image: "/themes/numbers-quest.jpg" },
  { title: "Bedtime Adventure", image: "/themes/bedtime-adventure.jpg" },
  { title: "Amazing Safari", image: "/themes/amazing-safari.jpg" },
];

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #dff1ff 0%, #fff7e8 100%)",
      fontFamily: "'Georgia', serif",
      color: "#2c3e50"
    }}>

      {/* NAV */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 30px",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}>
        <strong>⭐ My Magic Story Book</strong>
        <div style={{display: "flex", gap: 20}}>
          <span>Home</span>
          <span>Our Books</span>
          <span>Reviews</span>
          <span>FAQ</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        maxWidth: 1200,
        margin: "60px auto",
        padding: 20,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center"
      }}>

        <div>
          <h1 style={{fontSize: 52, lineHeight: 1.1}}>
            Create a <span style={{color: "#c9a24d"}}>Personalized</span><br/>
            Storybook
          </h1>

          <p style={{fontSize: 18, margin: "20px 0"}}>
            Where your child becomes the hero of a magical adventure.
          </p>

          <Link href="/create">
            <button style={{
              padding: "16px 30px",
              borderRadius: 30,
              border: "none",
              background: "linear-gradient(#f7d88a, #caa44a)",
              fontSize: 18,
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
            }}>
              Create Your Book
            </button>
          </Link>
        </div>

        <div>
          <img
            src="/hero.jpg"
            alt="Magic Book"
            style={{
              width: "100%",
              borderRadius: 25,
              boxShadow: "0 25px 60px rgba(0,0,0,0.25)"
            }}
          />
        </div>
      </section>

      {/* STEPS */}
      <section style={{
        maxWidth: 900,
        margin: "0 auto 60px",
        background: "rgba(255,255,255,0.6)",
        borderRadius: 25,
        padding: 30,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        textAlign: "center",
        gap: 20
      }}>
        <div>📖<br/>Choose a Story</div>
        <div>📷<br/>Upload Photo & Personalize</div>
        <div>👀<br/>Preview Your Book</div>
        <div>⬇️<br/>Download PDF</div>
      </section>

      {/* THEMES */}
      <section style={{maxWidth: 1200, margin: "0 auto", padding: 20}}>
        <h2 style={{textAlign: "center", fontSize: 36}}>
          Enchanting Stories For Every Child
        </h2>
        <p style={{textAlign: "center", marginBottom: 40}}>
          Select the perfect story theme and make your child the hero!
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 25
        }}>
          {THEMES.map((t, i) => (
            <div key={i} style={{
              background: "white",
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,0.12)"
            }}>
              <img
                src={t.image}
                alt={t.title}
                style={{width: "100%", height: 260, objectFit: "cover"}}
              />
              <div style={{
                padding: 16,
                textAlign: "center",
                fontWeight: "bold"
              }}>
                {t.title}
              </div>
            </div>
          ))}
        </div>

        <div style={{textAlign: "center", margin: "50px 0"}}>
          <button style={{
            padding: "18px 36px",
            borderRadius: 35,
            background: "linear-gradient(#f7d88a, #caa44a)",
            border: "none",
            fontSize: 20,
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Create Yours Now →
          </button>
        </div>
      </section>

    </div>
  );
}
