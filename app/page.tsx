import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] py-8">
      <main className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4">
        <div className="relative w-full max-w-lg mb-8"> {/* Updated container div */}
          <Image
            src="/images/hero-image.jpg"
            alt="Hero image representing music and art"
            width={800}
            height={450}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Welcome to My Creative World
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            Exploring the intersection of technology, music, and visual arts
          </p>
          <Link
            href="/about"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            Discover My Journey
          </Link>
        </div>
      </main>
    </div>
  )
}

