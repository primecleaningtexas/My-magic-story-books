import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { THEMES } from "../components/themes";

export default function Create() {
  const router = useRouter();
  const themeSlug = router.query.theme || "";

  const selected = THEMES.find((t) => t.slug === themeSlug);

  return (
    <>
      <Head>
        <title>Create Your Book - My Magic Story Book</title>
      </Head>

      <div className="pageBg">
        <header className="topbar">
          <div className="container topbarInner">
            <Link href="/" className="brand">
              <span className="brandStar">★</span>
              <span className="brandText">My Magic Story Book</span>
            </Link>
            <nav className="nav">
              <Link href="/" className="navLink">Home</Link>
              <Link href="/create" className="navLink active">Create</Link>
            </nav>
          </div>
        </header>

        <main className="container">
          <div className="panel createPanel">
            <h1 className="createTitle">Create Your Book</h1>
            <p className="createSub">
              {selected ? (
                <>Selected theme: <b>{selected.title}</b></>
              ) : (
                <>Pick a theme, upload a photo, and personalize your storybook.</>
              )}
            </p>

            <div className="formGrid">
              <label className="field">
                <span>Child’s name</span>
                <input placeholder="Olivia" />
              </label>

              <label className="field">
                <span>Age</span>
                <input placeholder="6" />
              </label>

              <label className="field fieldFull">
                <span>Theme</span>
                <select defaultValue={themeSlug || ""}>
                  <option value="">Select a theme</option>
                  {THEMES.map((t) => (
                    <option key={t.id} value={t.slug}>{t.title}</option>
                  ))}
                </select>
              </label>

              <div className="field fieldFull">
                <span>Photo (coming next)</span>
                <div className="uploadMock">Upload will be added in the next step ✅</div>
              </div>

              <div className="actions fieldFull">
                <button className="btnGold" onClick={() => alert("Next: we will build preview + PDF!")}>
                  Continue
                </button>
                <Link className="btnGhost" href="/">Back</Link>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="container footerInner">
            <div>© {new Date().getFullYear()} My Magic Story Book</div>
          </div>
        </footer>
      </div>
    </>
  );
}
