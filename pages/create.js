import { useState } from "react";
import { THEMES } from "../components/themes";
import { generateStory } from "../components/story";
import Logo from "../components/Logo";

export default function Create() {
  const [name, setName] = useState("Olivia");
  const [theme, setTheme] = useState(THEMES[0].id);

  const story = generateStory(name, theme);

  return (
    <div style={{ padding: 20 }}>
      <Logo />

      <h1 style={{ marginTop: 20 }}>Create Your Story</h1>

      <label>Child's Name</label>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ display: "block", marginBottom: 16 }}
      />

      <label>Story Theme</label>
      <select
        value={theme}
        onChange={e => setTheme(e.target.value)}
        style={{ display: "block", marginBottom: 24 }}
      >
        {THEMES.map(t => (
          <option key={t.id} value={t.id}>{t.title}</option>
        ))}
      </select>

      <h2>Story Preview</h2>
      {story.map((page, i) => (
        <p key={i}>{page}</p>
      ))}
    </div>
  );
}
