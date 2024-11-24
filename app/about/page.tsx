/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/images/silhouette.jpg"
            alt="Debdoot Manna"
            width={4500}
            height={2500}
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="mb-4">
            I am an electronic music producer based in Vadodara, Gujarat (India), with a deep passion for cybersecurity and technology. My curiosity drives me to constantly explore various aspects of computing, operating systems, cutting-edge scientific technologies, AI development, and beyond.
          </p>
          <p className="mb-4">
            Beyond the technical realm, I'm deeply fascinated by controversial theories and paradoxes. My thirst for knowledge knows no bounds – I immerse myself in diverse reading materials ranging from compelling stories and theoretical debates to philosophical and psychological discussions.
          </p>
          <p className="mb-4">
            Art is another significant part of my identity. I'm a painter whose style aligns with the Fauvism movement, and I'm passionate about photography and videography. My interest in visual storytelling extends to filmmaking, and I've had the opportunity to participate in a Netflix-hosted short film competition.
          </p>
          <p className="mb-4">
            Currently, I'm pursuing my degree in Computer Science at Charter University of Science and Technology (Class of 2027).
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">My Journey</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>My creative journey began with painting in the pre-lockdown era</li>
          <li>The lockdown period became a catalyst for exploration, evolving into numerous interests, with music production emerging as a professional pursuit</li>
          <li>Simultaneously developed a deep fascination with computers and their historical evolution</li>
          <li>Immersed myself in online research, exploring various digital platforms and discovering diverse areas of knowledge</li>
          <li>This journey led me through a progression of interests: from foundational science to physics, quantum physics, technology, and ultimately computer science</li>
        </ul>
      </div>
    </div>
  )
}

