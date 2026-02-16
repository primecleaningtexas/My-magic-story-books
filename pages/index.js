export default function Home() {
  return (
    <>
      <header className="header">
        <div className="logo">⭐ My Magic Story Book</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Our Books</a>
          <a href="#">Reviews</a>
          <a href="#">FAQ</a>
          <a href="#">My Account</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroContent">
          <h1>
            Create a <span>Personalized</span> Storybook
          </h1>

          <p>
            Where your child becomes the hero of a magical adventure.
            Upload a photo, pick a theme, preview the book, and download your PDF.
          </p>

          <div className="buttons">
            <button className="btnPrimary">Create Your Book</button>
            <button className="btnSecondary">Browse Themes</button>
          </div>
        </div>

        <div className="heroImage">
          <img src="/hero.jpg" alt="storybook preview" />
        </div>
      </section>
    </>
  )
}
