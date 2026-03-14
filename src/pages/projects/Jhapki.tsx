import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { Timeline } from "@/src/components/Timeline";
import { WorkflowDiagram } from "@/src/components/WorkflowDiagram";
import { FadeIn } from "@/src/components/FadeIn";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { ProjectGantt } from "@/src/components/ProjectGantt";
import { ProjectSection } from "@/src/components/ProjectSection";

export function Jhapki() {
  const remainingImages = [
    "https://i.postimg.cc/w3dLrPGt/bfcd6a31-4e7b-45ea-808c-f7761fffacae.jpg",
    "https://i.postimg.cc/hQrSZh5D/c6117f85-7f02-4afa-86b4-c8e79d6e34c8.jpg",
    "https://i.postimg.cc/ftYWX87b/c8631e5f-76d7-4d71-9c92-dcd1b6c5f7e4.jpg",
    "https://i.postimg.cc/5Q14m8pR/cdca5dfb-ca32-4c7f-a308-1b4f0f60a993.jpg",
    "https://i.postimg.cc/q60JG2QZ/ceacb3e9-3c53-4e05-b4c4-f75995ede38c.jpg",
    "https://i.postimg.cc/PNkY7cRC/d112244a-65f3-4925-9038-328b56b05c6f.jpg",
    "https://i.postimg.cc/8fDpbLwX/de3794d1-f33d-436e-8572-ce3faf0c801e.jpg",
    "https://i.postimg.cc/xcNkT3hk/2987c880-f983-4c15-b86e-730f1268b568.jpg",
    "https://i.postimg.cc/fJS3TfpR/54677053-d2a2-4e11-a4c0-cc0e6f9934a2.jpg",
    "https://i.postimg.cc/xcNkT3hd/e7b5e225-3093-4418-9a8f-553ca49944d4.jpg",
    "https://i.postimg.cc/0bK620F5/ef804255-2b60-448a-b2cf-6a43b9c37145.jpg",
  ];

  return (
    <ProjectLayout
      subtitle="Stop Motion Short Film"
      title="JHAPKI"
      tagline="A tactile exploration of dreams and reality through stop-motion animation."
    >
      <ProjectSection title="Project Scope">
        <ScopeGrid
          items={[
            { label: "Project Type", value: "Stop Motion Short Film" },
            { label: "Duration", value: "4 Weeks" },
            { label: "Team Size", value: "7 Members" },
            { label: "Role", value: "Director & Production Lead" },
          ]}
        />
        <div className="mt-8 text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            Jhapki is a short stop-motion film developed around the playful dynamics of classroom life. Inspired by the concept of "backbench culture," the narrative revolves around a subtle and humorous crush story unfolding between two students.
          </p>
          <p>
            The project aimed to explore how small emotional moments in everyday environments can be translated into a stylized stop-motion format, utilizing physical materials like clay, paper, and wire.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Creative Objective">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-400 leading-relaxed text-lg space-y-4">
            <p>
              The theme for this project was provided by the faculty and centered around the idea of classroom life and backbenchers. Our objective was to interpret this theme in a way that felt relatable, light-hearted, and emotionally engaging.
            </p>
            <p>
              Instead of focusing only on typical classroom chaos, we chose to explore the small and subtle moments that often happen in the back rows of a class. The goal was to create a short narrative around a cute classroom crush, capturing the innocence, awkwardness, and quiet interactions that many students experience during their school life. Through expressive animation and simple storytelling, we aimed to evoke a sense of nostalgia and warmth for the audience.
            </p>
          </div>
          <img src="https://i.postimg.cc/vDdfKjNr/35796491-6996-4603-9b59-e17b5d2a8ae2.jpg" alt="Jhapki Concept" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>

      <ProjectSection title="Roles & Responsibilities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-gray-400 leading-relaxed text-lg space-y-4">
            <p><strong className="text-white">My Role:</strong> Director & Production Lead</p>
            <p>Responsibilities included:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Leading the creative direction of the project</li>
              <li>Developing the core concept and narrative framework</li>
              <li>Designing visual assets and key imagery</li>
              <li>Coordinating team workflow and production stages</li>
              <li>Ensuring visual consistency across the project</li>
            </ul>
          </div>
          <img src="https://i.postimg.cc/GTrLjvzf/38772ed2-d0f4-40e1-be3a-be23a4cae794.jpg" alt="Jhapki Role" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>

      <ProjectSection title="Production Timeline & Pipeline">
        <div className="mb-8">
          <h4 className="text-xl font-bold text-white mb-4">Pipeline</h4>
          <div className="flex flex-wrap items-center gap-2 text-primary font-mono text-sm md:text-base">
            <span>Concept</span>
            <span>&darr;</span>
            <span>Storyboarding</span>
            <span>&darr;</span>
            <span>Character & Prop Creation</span>
            <span>&darr;</span>
            <span>Set Construction</span>
            <span>&darr;</span>
            <span>Stop Motion Photography</span>
            <span>&darr;</span>
            <span>Editing & Sound</span>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mb-4">Timeline</h4>
        <div className="space-y-6 text-gray-400 leading-relaxed text-lg mb-8">
          <div>
            <strong className="text-white block mb-2">Week 1 – Pre-Production</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Concept development and interpretation of theme</li>
              <li>Storyboarding and visual planning</li>
              <li>Character design and material sourcing</li>
            </ul>
          </div>
          <div>
            <strong className="text-white block mb-2">Week 2 – Asset Creation</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Set design and construction</li>
              <li>Prop creation and character preparation</li>
              <li>Rigging armatures and setting up lighting</li>
            </ul>
          </div>
          <div>
            <strong className="text-white block mb-2">Week 3 – Production</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Stop-motion shooting</li>
              <li>Frame-by-frame animation and micro-movements</li>
            </ul>
          </div>
          <div>
            <strong className="text-white block mb-2">Week 4 – Post Production</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Video editing and sequence compilation</li>
              <li>Color grading and sound design</li>
            </ul>
          </div>
        </div>

        <ProjectGantt 
          totalWeeks={4}
          tasks={[
            { name: "Pre-Production", startWeek: 0, durationWeeks: 1 },
            { name: "Asset Creation", startWeek: 1, durationWeeks: 1 },
            { name: "Production", startWeek: 2, durationWeeks: 1 },
            { name: "Post Production", startWeek: 3, durationWeeks: 1 }
          ]} 
        />
      </ProjectSection>

      <ProjectSection title="Deliverables">
        <p className="text-gray-400 leading-relaxed text-lg mb-6">
          Short Stop-Motion Film & Behind-the-Scenes Documentation.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/10 aspect-video">
          <img src="https://i.postimg.cc/vDdfKjNr/35796491-6996-4603-9b59-e17b5d2a8ae2.jpg" alt="Jhapki Deliverable" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>

      <ProjectSection title="Tools & Software Used">
        <ul className="list-disc list-inside text-gray-400 leading-relaxed text-lg space-y-2">
          <li><strong className="text-white">Physical Materials</strong> – Clay, paper, wire, found objects for set and character design</li>
          <li><strong className="text-white">Adobe Premiere Pro</strong> – Video compilation and editing</li>
          <li><strong className="text-white">Adobe After Effects</strong> – Compositing and visual enhancements</li>
          <li><strong className="text-white">Adobe Photoshop</strong> – Storyboarding and asset preparation</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Challenges & Solutions">
        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
          <div>
            <strong className="text-white block mb-2">Challenge 1</strong>
            <p>Stop-motion animation is highly time-intensive, making it difficult to complete all planned scenes within the available schedule.</p>
            <strong className="text-white block mt-2 mb-2">Solution</strong>
            <p>Scenes were prioritized and simplified to ensure the core narrative remained intact while maintaining production efficiency and meeting the deadline.</p>
          </div>
          <div>
            <strong className="text-white block mb-2">Challenge 2</strong>
            <p>Managing coordination across multiple team members working on different physical tasks simultaneously.</p>
            <strong className="text-white block mt-2 mb-2">Solution</strong>
            <p>Clear task division and daily progress check-ins helped maintain alignment within the team and ensured a smooth workflow.</p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Final Outcome">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            The final output was a short stop-motion film capturing the essence of a classroom crush.
          </p>
          <p>
            The project successfully demonstrated skills in stop-motion animation, physical set design, visual storytelling, and team coordination. It provided valuable hands-on experience in managing a physical production pipeline from concept to final render.
          </p>
        </div>
      </ProjectSection>

      <FadeIn>
        <h3 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wider text-center mt-12">Behind the Scenes & Stills</h3>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {remainingImages.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl border border-white/10 group break-inside-avoid">
              <img
                src={src}
                alt={`Jhapki production still ${index + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </FadeIn>
    </ProjectLayout>
  );
}
