import Link from "next/link";
import Logo from "../components/Logo";
import { THEMES } from "../components/themes";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Logo />
        <Link href="/create">Create Your Book</Link>
      </header>

      <section style={{ marginTop: 40 }}>
        <h1>Create a Personalized Storybook</h1>
        <p>Where your child becomes the hero of a magical adventure.</p>
        <Link href="/create">Create Yours Now →</Link>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>Choose a Story</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {THEMES.map(t => (
            <div key={t.id} style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
              {t.title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
