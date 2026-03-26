import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { WorkflowDiagram } from "@/src/components/WorkflowDiagram";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { FadeIn } from "@/src/components/FadeIn";
import { ProjectGantt } from "@/src/components/ProjectGantt";
import { ProjectSection } from "@/src/components/ProjectSection";

export function Bulgari() {
  return (
    <ProjectLayout
      subtitle="Supporting Project: AI Advertisement"
      title="BULGARI: Serpenti Necklace Ad"
      tagline="A cinematic AI-generated ad reverse-telling a theft."
    >
      <ProjectSection title="Project Scope">
        <ScopeGrid
          items={[
            { label: "Project Type", value: "AI-Generated Advertisement" },
            { label: "Duration", value: "2 Weeks" },
            { label: "Team Size", value: "Small Team" },
            { label: "Role", value: "Visual Development & Prompt Design" },
          ]}
        />
        <div className="mt-8 text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            This project is an AI-generated advertisement concept for Bulgari's Serpenti necklace. It explores using AI tools to produce a cinematic luxury ad with minimal traditional resources.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Creative Objective">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-400 leading-relaxed text-lg space-y-4">
            <p>
              Based on a luxury crime aesthetic, the narrative shows a jewelry theft unfolding in reverse chronological order, highlighting the Bulgari necklace throughout the sequence.
            </p>
          </div>
          <img src="https://i.postimg.cc/9rPBQ2vt/34db7e0d-9877-4c7e-823f-3758ce343b1b.jpg" alt="Bulgari Concept" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>

      <ProjectSection title="Roles & Responsibilities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-gray-400 leading-relaxed text-lg space-y-4">
            <p><strong className="text-white">My Role:</strong> Visual Development & Prompt Design</p>
            <p>Responsibilities included:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Designing prompts for generating visual scenes using AI tools</li>
              <li>Generating image assets through iterative prompt experimentation</li>
              <li>Defining the shot composition and visual style of the advertisement</li>
              <li>Directing the aesthetic tone of the crime-themed narrative</li>
            </ul>
          </div>
          <img src="https://i.postimg.cc/0bGCyvLY/4c49a71c-670d-4bbc-905b-b6cf7309dc25.jpg" alt="Bulgari Role" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>

      <ProjectSection title="Production Timeline & Pipeline">
        <div className="mb-8">
          <h4 className="text-xl font-bold text-white mb-4">Pipeline</h4>
          <div className="flex flex-wrap items-center gap-2 text-primary font-mono text-sm md:text-base">
            <span>Concept</span>
            <span>&darr;</span>
            <span>Prompt Design</span>
            <span>&darr;</span>
            <span>Image Generation</span>
            <span>&darr;</span>
            <span>Editing & Compilation</span>
            <span>&darr;</span>
            <span>Sound Design</span>
            <span>&darr;</span>
            <span>Final Output</span>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mb-4">Timeline</h4>
        <div className="space-y-6 text-gray-400 leading-relaxed text-lg mb-8">
          <div>
            <strong className="text-white block mb-2">Week 1 – Concept & Prompt Design</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Concept development and narrative structuring</li>
              <li>Prompt engineering and visual planning</li>
            </ul>
          </div>
          <div>
            <strong className="text-white block mb-2">Week 2 – Production & Post Production</strong>
            <ul className="list-disc list-inside ml-4">
              <li>AI Image generation and asset curation</li>
              <li>Video editing and sequence compilation</li>
              <li>Sound design and final rendering</li>
            </ul>
          </div>
        </div>

        <ProjectGantt 
          totalWeeks={2}
          tasks={[
            { name: "Concept & Prompts", startWeek: 0, durationWeeks: 1 },
            { name: "AI Generation", startWeek: 0.5, durationWeeks: 1 },
            { name: "Editing & Sound", startWeek: 1.5, durationWeeks: 0.5 }
          ]} 
        />
      </ProjectSection>

      <ProjectSection title="Deliverables">
        <p className="text-gray-400 leading-relaxed text-lg mb-6">
          40-second AI-generated advertisement showcasing the Bulgari Serpenti necklace through a cinematic reverse-crime narrative.
        </p>
        <VideoPlayer url="https://www.youtube.com/embed/Ef_Xpqkui-4" />
      </ProjectSection>

      <ProjectSection title="Tools & Software Used">
        <ul className="list-disc list-inside text-gray-400 leading-relaxed text-lg space-y-2">
          <li><strong className="text-white">ChatGPT</strong> – Concept and narrative development</li>
          <li><strong className="text-white">Nano Banana / Flow</strong> – AI Image generation</li>
          <li><strong className="text-white">Suno AI</strong> – AI-generated music and audio</li>
          <li><strong className="text-white">Adobe After Effects</strong> – Video compilation, editing, and compositing</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Challenges & Solutions">
        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
          <div>
            <strong className="text-white block mb-2">Challenge: Brand Consistency</strong>
            <p>Maintaining brand style and consistency across AI-generated frames.</p>
            <strong className="text-white block mt-2 mb-2">Solution</strong>
            <p>Iterated heavily on prompts and utilized specific style keywords to preserve the luxury aesthetic.</p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Final Outcome">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            The final 40-second experimental AI-generated advertisement demonstrates skills in AI prompt design, generative concept development, and visual storytelling, providing valuable learnings in AI-driven cinematics.
          </p>
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
}
