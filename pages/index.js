import Head from "next/head";
import Link from "next/link";
import { THEMES } from "../components/themes";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Magic Story Book</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="pageBg">
        <header className="topbar">
          <div className="container topbarInner">
            <Link href="/" className="brand">
              <span className="brandStar">★</span>
              <span className="brandText">My Magic Story Book</span>
            </Link>

            <nav className="nav">
              <Link href="/" className="navLink active">Home</Link>
              <a href="#books" className="navLink">Our Books</a>
              <a href="#reviews" className="navLink">Reviews</a>
              <a href="#faq" className="navLink">FAQ</a>
              <a href="#account" className="navLink">My Account</a>
            </nav>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="hero">
            <div className="container heroInner">
              <div className="heroLeft">
                <div className="heroTitle">
                  <h1>
                    Create a <br />
                    <span>Personalized</span> <br />
                    Storybook
                  </h1>
                </div>

                <p className="heroSub">
                  Where your child becomes the hero
                  <br />
                  of a magical adventure.
                </p>

                <div className="heroCtas">
                  <Link href="/create" className="btnGold">Create Your Book</Link>
                </div>
              </div>

              <div className="heroRight" aria-label="Hero artwork">
                {/* Use sua imagem aqui */}
                <img className="heroArt" src="/hero.jpg" alt="My Magic Story Book hero" />
              </div>
            </div>

            {/* STEPS */}
            <div className="container stepsWrap">
              <div className="steps">
                <div className="step">
                  <div className="stepIcon">📖</div>
                  <div className="stepText">Choose a Story</div>
                </div>

                <div className="stepArrow">→</div>

                <div className="step">
                  <div className="stepIcon">📷</div>
                  <div className="stepText">Upload Photo &amp; Personalize</div>
                </div>

                <div className="stepArrow">→</div>

                <div className="step">
                  <div className="stepIcon">👀</div>
                  <div className="stepText">Preview Your Book</div>
                </div>

                <div className="stepArrow">→</div>

                <div className="step">
                  <div className="stepIcon">⬇️</div>
                  <div className="stepText">Download PDF</div>
                </div>
              </div>
            </div>
          </section>

          {/* THEMES */}
          <section id="books" className="themesSection">
            <div className="container panel">
              <div className="sectionHead">
                <h2 className="sectionTitle">Enchanting Stories For Every Child</h2>
                <p className="sectionSub">Select the perfect story theme and make your child the hero!</p>
              </div>

              <div className="grid">
                {THEMES.map((t) => (
                  <Link key={t.id} href={`/create?theme=${t.slug}`} className="card">
                    <div className="coverFrame">
                      <img
                        src={t.image}
                        alt={t.title}
                        onError={(e) => {
                          // Se ainda não tiver a imagem da capa, cai no hero.jpg
                          e.currentTarget.src = "/hero.jpg";
                        }}
                      />
                    </div>
                    <div className="cardTitle">{t.title}</div>
                  </Link>
                ))}
              </div>

              <div className="ctaBottom">
                <Link href="/create" className="btnGold btnGoldLarge">Create Yours Now →</Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footerInner">
            <div>© {new Date().getFullYear()} My Magic Story Book</div>
            <div className="footerLinks">
              <a href="#faq">FAQ</a>
              <a href="#account">Account</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
