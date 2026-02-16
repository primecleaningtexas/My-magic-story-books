export default function Home() {
  const themes = [
    { title: "Magical Adventure", image: "/themes/magical-adventure.jpg" },
    { title: "Dreamland Journey", image: "/themes/dreamland-journey.jpg" },
    { title: "Under the Sea", image: "/themes/under-the-sea.jpg" },
    { title: "Space Explorer", image: "/themes/space-explorer.jpg" },
    { title: "Kingdom of Animals", image: "/themes/kingdom-of-animals.jpg" },
    { title: "Numbers Quest", image: "/themes/numbers-quest.jpg" },
    { title: "Bedtime Adventure", image: "/themes/bedtime-adventure.jpg" },
    { title: "Amazing Safari", image: "/themes/amazing-safari.jpg" },
  ];

  return (
    <>
      <header>
        <h1>⭐ My Magic Story Book</h1>
      </header>

      <section className="hero">
        <h2>
          Create a <span>Personalized</span> Storybook
        </h2>
        <p>Where your child becomes the hero of a magical adventure.</p>
        <button>Create Your Book</button>
      </section>

      <section className="section">
        <h3>Enchanting Stories For Every Child</h3>
        <p>Select the perfect story theme and make your child the hero!</p>

        <div className="grid">
          {themes.map((t) => (
            <div className="card" key={t.title}>
              <img src={t.image} alt={t.title} />
              <h4>{t.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
