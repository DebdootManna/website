import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center">
        <div className="relative w-full max-w-lg aspect-video mb-8">
          <Image
            src="/images/hero-image.jpg"
            alt="Hero image representing music and art"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Welcome to My Creative World
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          Exploring the intersection of technology, music, and visual arts
        </p>
        <Link
          href="/about"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-lg font-semibold transition-colors"
        >
          Discover My Journey
        </Link>
      </main>
    </div>
  )
}

