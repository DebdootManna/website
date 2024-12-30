import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] py-8">
      <main className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4">
        <div className="relative w-full max-w-md aspect-square mb-12 bg-black rounded-lg p-8">
          <Image
            src="/unknown-pleasures.png"
            alt="Waveform visualization representing music and technology"
            width={500}
            height={500}
            className="w-full h-full object-contain dark:invert"
            priority
          />
        </div>
        <div className="text-center space-y-6 max-w-2xl">
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
      <footer className="mt-auto text-center text-sm text-muted-foreground">
        <p>
          Built by Debdoot Manna. The source code is available on{' '}
          <Link href="https://github.com" className="underline hover:text-primary">
            GitHub
          </Link>
          .
        </p>
      </footer>
    </div>
  )
}

