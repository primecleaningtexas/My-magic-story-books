import Link from "next/link";

const THEMES = [
  {
    id: "magical",
    title: "Magical Adventure",
    image: "/themes/magical-adventure.jpg",
  },
  {
    id: "dreamland",
    title: "Dreamland Journey",
    image: "/themes/dreamland-journey.jpg",
  },
  {
    id: "sea",
    title: "Under the Sea",
    image: "/themes/under-the-sea.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="heroText">
          <h1>
            Create a <span>Personalized</span> Storybook
          </h1>
          <p>
            Where your child becomes the hero of a magical adventure.
          </p>

          <Link href="/create" className="btnPrimary">
            Create Your Book
          </Link>
        </div>

        <div className="heroImage">
          <img src="/hero.jpg" alt="Hero storybook" />
        </div>
      </section>

      {/* THEMES */}
      <section className="themes">
        <h2>Enchanting Stories For Every Child</h2>
        <p>Select the perfect story theme and make your child the hero!</p>

        <div className="grid">
          {THEMES.map((theme) => (
            <div key={theme.id} className="card">
              <img src={theme.image} alt={theme.title} />
              <h3>{theme.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .hero {
          display: flex;
          gap: 40px;
          align-items: center;
          padding: 60px 20px;
          max-width: 1200px;
          margin: auto;
        }

        .heroText h1 {
          font-size: 42px;
          line-height: 1.2;
        }

        .heroText span {
          color: #c9a24d;
        }

        .heroText p {
          font-size: 18px;
          margin: 20px 0;
        }

        .btnPrimary {
          background: #f4c430;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: bold;
          color: #000;
          text-decoration: none;
          display: inline-block;
        }

        .heroImage img {
          max-width: 420px;
          border-radius: 20px;
        }

        .themes {
          text-align: center;
          padding: 80px 20px;
        }

        .themes h2 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .themes p {
          color: #555;
          margin-bottom: 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: auto;
        }

        .card {
          background: #fff;
          border-radius: 20px;
          padding: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .card img {
          width: 100%;
          border-radius: 16px;
        }

        .card h3 {
          margin-top: 12px;
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
