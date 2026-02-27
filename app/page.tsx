import WaitlistForm from './components/WaitlistForm'

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>🎉 Join Our Waitlist</h1>
        <p>
          Be the first to experience the future of social on Farcaster & Base.
          Join our exclusive community today!
        </p>
        <WaitlistForm />
      </div>
    </main>
  )
}
