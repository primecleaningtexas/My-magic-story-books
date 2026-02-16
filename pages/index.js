import Head from "next/head";

const THEMES = [
  {
    id: "magical-adventure",
    title: "Magical Adventure",
    image: "/themes/magical-adventure.jpg",
  },
  {
    id: "dreamland-journey",
    title: "Dreamland Journey",
    image: "/themes/dreamland-journey.jpg",
  },
  {
    id: "under-the-sea",
    title: "Under the Sea",
    image: "/themes/under-the-sea.jpg",
  },
  {
    id: "space-explorer",
    title: "Space Explorer",
    image: "/themes/space-explorer.jpg",
  },
  {
    id: "kingdom-of-animals",
    title: "Kingdom of Animals",
    image: "/themes/kingdom-of-animals.jpg",
  },
  {
    id: "numbers-quest",
    title: "Numbers Quest",
    image: "/themes/numbers-quest.jpg",
  },
  {
    id: "bedtime-adventure",
    title: "Bedtime Adventure",
    image: "/themes/bedtime-adventure.jpg",
  },
  {
    id: "amazing-safari",
    title: "Amazing Safari",
    image: "/themes/amazing-safari.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>My Magic Story Book</title>
      </Head>

      {/* HERO */}
      <section className="hero">
        <div className="heroText">
          <h1>
            Create a <span>Personalized</span> Storybook
          </h1>
          <p>
            Where your child becomes the hero of a magical adventure.
          </p>

          <button className="cta">Create Your Book</button>
        </div>

        <div className="heroImage">
          <img src="/hero.jpg" alt="Hero Book" />
        </div>
      </section>

      {/* THEMES */}
      <section className="themes">
        <h2>Enchanting Stories For Every Child</h2>
        <p>Select the perfect story theme and make your child the hero!</p>

        <div className="grid">
          {THEMES.map((theme) => (
            <div key={theme.id} className="card">
              <div className="coverWrap">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="cover"
                />
              </div>
              <div className="title">{theme.title}</div>
            </div>
          ))}
        </div>

        <button className="cta bottom">Create Yours Now →</button>
      </section>

      {/* STYLES */}
      <style jsx>{`
        body {
          margin: 0;
        }

        .hero {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          background: linear-gradient(#eaf6ff, #ffffff);
          gap: 30px;
        }

        .heroText {
          max-width: 420px;
        }

        h1 {
          font-size: 42px;
          margin-bottom: 12px;
        }

        h1 span {
          color: #caa44d;
        }

        p {
          color: #555;
          margin-bottom: 20px;
        }

        .cta {
          background: linear-gradient(#f7d47c, #caa44d);
          border: none;
          border-radius: 30px;
          padding: 14px 28px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        .heroImage img {
          max-width: 340px;
          width: 100%;
        }

        .themes {
          padding: 60px 20px;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .card {
          background: #ffffff;
          border-radius: 18px;
          padding: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        /* 🔥 PARTE QUE CONSERTA A IMAGEM 🔥 */
        .coverWrap {
          width: 100%;
          aspect-ratio: 1 / 1; /* QUADRADO */
          overflow: hidden;
          border-radius: 14px;
          background: #f5f5f5;
        }

        .cover {
          width: 100%;
          height: 100%;
          object-fit: cover; /* NÃO ESTICA */
          display: block;
        }

        .title {
          margin-top: 10px;
          font-weight: bold;
        }

        .bottom {
          margin-top: 40px;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
}
