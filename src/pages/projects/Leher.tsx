import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { Timeline } from "@/src/components/Timeline";
import { WorkflowDiagram } from "@/src/components/WorkflowDiagram";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { FadeIn } from "@/src/components/FadeIn";
import { ProjectGantt } from "@/src/components/ProjectGantt";
import { ProjectSection } from "@/src/components/ProjectSection";
import { ImageGallery } from "@/src/components/ImageGallery";

export function Leher() {
  const leherImages = [
    "https://img.youtube.com/vi/5ViDti_Ly4k/maxresdefault.jpg"
  ];

  return (
    <ProjectLayout
      subtitle="Experimental Short Film"
      title="LEHER"
      tagline="Exploring the emotional contrast between fear and calmness."
    >
      <ProjectSection title="Project Scope">
        <ScopeGrid
          items={[
            { label: "Project Type", value: "Experimental Short Film" },
            { label: "Duration", value: "2 Weeks" },
            { label: "Team Size", value: "5 Members" },
            { label: "Role", value: "Director & Visual Planner" },
          ]}
        />
        <div className="mt-8 text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            Leher was an experimental short film project developed as part of a collaborative module exploring the concept of Rasa (emotional essence) through visual storytelling.
          </p>
          <p>
            The project required students to interpret one or more Rasas and translate them into a short audio-visual experience using creative mediums such as animation, live action footage, and experimental techniques.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Creative Objective">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            The creative objective of Leher was to explore how visual rhythm, texture, and motion can represent emotional transitions without relying on a traditional storyline.
          </p>
          <p>
            The team aimed to depict the movement between fear and calmness, treating emotion as something fluid and cyclical rather than fixed. Inspired by ocean waves, the film reflects how emotional states rise and fall, much like the movement of water.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Roles & Responsibilities">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p><strong className="text-white">My Role:</strong> Direction and Visual Planning</p>
          <p>Responsibilities included:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Acting as the team leader and director</li>
            <li>Developing the conceptual direction of the film</li>
            <li>Creating the animatics to plan the visual flow and pacing</li>
            <li>Designing the 2D character visuals using Procreate</li>
            <li>Guiding the overall creative direction of the project</li>
          </ul>
        </div>
      </ProjectSection>

      <ProjectSection title="Production Timeline & Pipeline">
        <div className="mb-8">
          <h4 className="text-xl font-bold text-white mb-4">Pipeline</h4>
          <div className="flex flex-wrap items-center gap-2 text-primary font-mono text-sm md:text-base">
            <span>Concept Ideation</span>
            <span>&darr;</span>
            <span>Visual Planning</span>
            <span>&darr;</span>
            <span>Animation Production</span>
            <span>&darr;</span>
            <span>Sound and Editing</span>
            <span>&darr;</span>
            <span>Final Output</span>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mb-4">Timeline</h4>
        <div className="space-y-6 text-gray-400 leading-relaxed text-lg mb-8">
          <div>
            <strong className="text-white block mb-2">Week 1 – Concept & Pre-Production</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Interpreting the theme and developing the concept</li>
              <li>Creating visual structure and producing animatics</li>
            </ul>
          </div>
          <div>
            <strong className="text-white block mb-2">Week 2 – Production & Post-Production</strong>
            <ul className="list-disc list-inside ml-4">
              <li>2D character animation and grain stop-motion sequences</li>
              <li>Live-action integration and soundscape design</li>
              <li>Compiling and editing final footage</li>
            </ul>
          </div>
        </div>

        <ProjectGantt 
          totalWeeks={2}
          tasks={[
            { name: "Concept & Pre-Production", startWeek: 0, durationWeeks: 1 },
            { name: "Production & Post", startWeek: 1, durationWeeks: 1 }
          ]} 
        />
      </ProjectSection>

      <ProjectSection title="Deliverables">
        <p className="text-gray-400 leading-relaxed text-lg mb-6">
          1-minute experimental short film that combined 2D animation, grain-based stop motion animation, live-action ocean footage, and sound design.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/10 aspect-video">
          <VideoPlayer url="https://drive.google.com/file/d/1TCBgJpshMyjU1WRUTGa5L3wIK1jhXs8w/view?usp=sharing" />
        </div>
      </ProjectSection>

      <ProjectSection title="Tools & Software Used">
        <ul className="list-disc list-inside text-gray-400 leading-relaxed text-lg space-y-2">
          <li><strong className="text-white">Procreate</strong> – 2D character design and animation</li>
          <li><strong className="text-white">Adobe Premiere Pro</strong> – Video compilation and editing</li>
          <li><strong className="text-white">Adobe After Effects</strong> – Compositing and visual enhancements</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Challenges & Solutions">
        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
          <div>
            <strong className="text-white block mb-2">Challenge 1</strong>
            <p>Inconsistent participation from some team members affected the workflow.</p>
            <strong className="text-white block mt-2 mb-2">Solution</strong>
            <p>Re-distributed responsibilities and maintained clear communication to ensure project completion.</p>
          </div>
          <div>
            <strong className="text-white block mb-2">Challenge 2</strong>
            <p>Experimental grain-based stop motion animation was time-consuming.</p>
            <strong className="text-white block mt-2 mb-2">Solution</strong>
            <p>Simplified scenes to focus on texture rather than complex movement, optimizing the production time.</p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Process & Experimentation">
        <p className="text-gray-400 leading-relaxed text-lg mb-8">
          During the development of Leher, several animation experiments were conducted to explore motion, weight, and fluid dynamics. These tests helped shape the final visual language of the film.
        </p>
        
        <div className="mb-12">
          <h4 className="text-xl font-bold text-white mb-6">Visual Development</h4>
          <ImageGallery images={leherImages} />
        </div>
      </ProjectSection>

      <ProjectSection title="Final Outcome">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            The final output was a 1-minute experimental short film.
          </p>
          <p>
            The project demonstrated how simple materials and abstract imagery can communicate complex emotions without relying on narrative storytelling. It enhanced skills in experimental animation, visual planning, and team leadership.
          </p>
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
}
