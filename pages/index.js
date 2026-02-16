import Link from "next/link";
import styles from "../styles/Home.module.css";

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
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Create a <span>Personalized</span> Storybook
          </h1>
          <p>
            Where your child becomes the hero of a magical adventure.
          </p>

          <Link href="/create" className={styles.cta}>
            Create Your Book
          </Link>
        </div>

        <div className={styles.heroImage}>
          <img src="/hero.jpg" alt="My Magic Story Book" />
        </div>
      </section>

      {/* THEMES */}
      <section className={styles.themes}>
        <h2>Enchanting Stories For Every Child</h2>
        <p>Select the perfect story theme and make your child the hero!</p>

        <div className={styles.grid}>
          {THEMES.map((theme) => (
            <div key={theme.id} className={styles.card}>
              <img src={theme.image} alt={theme.title} />
              <h3>{theme.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
