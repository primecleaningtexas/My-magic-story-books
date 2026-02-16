import Link from 'next/link'

export default function Home() {
  return (
    <main className="hero">
      <div className="heroText">
        <h1>Create a Personalized Storybook</h1>
        <p>
          Where your child becomes the hero of a magical adventure.
        </p>

        <Link href="/create" className="btn">
          Create Your Book
        </Link>
      </div>

      <div className="heroArt" />
    </main>
  )
}
