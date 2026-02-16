import Link from "next/link";

const THEMES = [
  { id: "magical-adventure", title: "Magical Adventure", image: "/themes/magical-adventure.jpg" },
  { id: "dreamland-journey", title: "Dreamland Journey", image: "/themes/dreamland-journey.jpg" },
  { id: "under-the-sea", title: "Under the Sea", image: "/themes/under-the-sea.jpg" },
  { id: "space-explorer", title: "Space Explorer", image: "/themes/space-explorer.jpg" },
  { id: "kingdom-of-animals", title: "Kingdom of Animals", image: "/themes/kingdom-of-animals.jpg" },
  { id: "numbers-quest", title: "Numbers Quest", image: "/themes/numbers-quest.jpg" },
  { id: "bedtime-adventure", title: "Bedtime Adventure", image: "/themes/bedtime-adventure.jpg" },
  { id: "amazing-safari", title: "Amazing Safari", image: "/themes/amazing-safari.jpg" },
];

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #eaf6ff, #ffffff)",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <div style={{fontWeight: "bold"}}>⭐ My Magic Story Book</div>
        <div style={{display: "flex", gap: "20px"}}>
          <div>Home</div>
          <div>Our Books</div>
          <div>Reviews</div>
          <div>FAQ</div>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "40px"
      }}>

        <div style={{flex: 1}}>
          <h1 style={{fontSize: "50px", marginBottom: "10px"}}>
            Create a <span style={{color: "#caa44a"}}>Personalized</span> Storybook
          </h1>

          <p style={{fontSize: "18px", marginBottom: "20px"}}>
            Where your child becomes the hero of a magical adventure.
          </p>

          <Link href="/create">
            <button style={{
              padding: "15px 25px",
              fontSize: "18px",
              borderRadius: "30px",
              border: "none",
              background: "linear-gradient(to bottom, #f7d37c, #d0a44a)",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Create Your Book
            </button>
          </Link>
        </div>

        <div style={{flex: 1}}>
          <img
            src="/hero.jpg"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.15)"
            }}
          />
        </div>
      </div>

      {/* THEMES */}
      <div style={{maxWidth: "1100px", margin: "40px auto", padding: "20px"}}>
        <h2 style={{textAlign: "center", fontSize: "35px"}}>
          Enchanting Stories For Every Child
        </h2>

        <p style={{textAlign: "center", marginBottom: "30px"}}>
          Select the perfect story theme and make your child the hero!
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}>
          {THEMES.map((theme) => (
            <div key={theme.id} style={{
              background: "white",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
            }}>
              <img
                src={theme.image}
                style={{width: "100%", height: "220px", objectFit: "cover"}}
              />
              <div style={{
                padding: "15px",
                fontWeight: "bold",
                textAlign: "center"
              }}>
                {theme.title}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
