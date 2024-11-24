import { CheckCircle } from 'lucide-react'

const technicalSkills = [
  'JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'Git',
  'Ableton Live', 'FL Studio', 'Adobe Photoshop', 'Adobe Premiere Pro'
]

const artisticSkills = [
  'Music Production', 'Painting (Fauvism)', 'Photography', 'Filmmaking'
]

const SkillItem = ({ skill }: { skill: string }) => (
  <div className="flex items-center space-x-2">
    <CheckCircle className="h-5 w-5 text-green-500" />
    <span>{skill}</span>
  </div>
)

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {technicalSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Artistic Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {artisticSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </section>
      </div>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Music Production (Professional Part-time)</li>
          <li>Artistic Services (Freelance Painting)</li>
          <li>Photography (Creative Projects)</li>
          <li>Filmmaking (Developing Expertise)</li>
          <li>Academic Support Services</li>
        </ul>
      </section>
    </div>
  )
}

