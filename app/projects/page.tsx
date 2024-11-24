import Image from 'next/image'
import Link from 'next/link'

const musicProjects = [
  { title: 'Ethereal Echoes', description: 'A future bass journey through soundscapes', audio: '/audio/ethereal-echoes.mp3', link: 'https://soundcloud.com/your-profile/ethereal-echoes' },
  { title: 'Neon Nights', description: 'An electrifying house track with retro vibes', audio: '/audio/neon-nights.mp3', link: 'https://spotify.com/track/neon-nights' },
  // Add more music projects here
]

const artProjects = [
  { title: 'Abstract Harmony', description: 'A vibrant exploration of color and form', image: '/images/abstract-harmony.jpg' },
  { title: 'Urban Reflections', description: 'A photographic series capturing city life', image: '/images/urban-reflections.jpg' },
  // Add more art projects here
]

const filmProjects = [
  { title: 'Echoes of Silence', description: 'A short film exploring the power of non-verbal communication', video: '/videos/echoes-of-silence-trailer.mp4' },
  // Add more film projects here
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Music Production</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {musicProjects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <audio controls className="w-full mb-4">
                <source src={project.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Listen on Platform
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Visual Arts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artProjects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4">
              <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Filmmaking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filmProjects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <video controls className="w-full rounded-lg">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

