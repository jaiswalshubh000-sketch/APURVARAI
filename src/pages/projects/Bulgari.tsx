import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { WorkflowDiagram } from "@/src/components/WorkflowDiagram";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { FadeIn } from "@/src/components/FadeIn";

export function Bulgari() {
  return (
    <ProjectLayout
      subtitle="Supporting Project: AI Advertisement"
      title="BULGARI: Serpenti Necklace Ad"
      tagline="A cinematic AI-generated ad reverse-telling a theft."
    >
      <ScopeGrid
        items={[
          { label: "Duration", value: "2 Weeks" },
          { label: "Team", value: "Small Team" },
          { label: "Output", value: "40-second Video Ad" },
          { label: "Media", value: "AI Imagery, Video Editing" },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <FadeIn>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Objective</h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            Explore AI tools to create a luxury ad narrative, pushing the boundaries of generative storytelling.
          </p>
          <img src="https://i.postimg.cc/SJLGx4wL/247fcf0a-6455-4294-acdb-dcde02e2e7f5.jpg" alt="Bulgari Objective" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Concept</h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            Reverse chronological crime story highlighting the Bulgari necklace, starting from the escape and ending at the heist.
          </p>
          <img src="https://i.postimg.cc/9rPBQ2vt/34db7e0d-9877-4c7e-823f-3758ce343b1b.jpg" alt="Bulgari Concept" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </FadeIn>
      </div>

      <FadeIn className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Role & Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <p className="text-gray-400 leading-relaxed text-lg">
            <strong className="text-white">Role:</strong> Visual Development & Prompt Design. Created AI art prompts and storyboards.
          </p>
          <img src="https://i.postimg.cc/0bGCyvLY/4c49a71c-670d-4bbc-905b-b6cf7309dc25.jpg" alt="Bulgari Role" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </FadeIn>

      <FadeIn className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Workflow & Tools</h3>
        <WorkflowDiagram steps={["Ideation", "Prompt Engineering", "AI Generation", "Video Editing"]} />
        <p className="text-gray-400 leading-relaxed mt-4 font-mono text-sm mb-6">
          Tools: ChatGPT (concept), Midjourney (Nano Banana, Flow) for images, Suno AI for audio, After Effects for editing.
        </p>
        <img src="https://i.postimg.cc/bGr0gtdw/9c40128f-c9e9-4e07-b77e-31ec4ab98856.jpg" alt="Bulgari Workflow" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <FadeIn>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Challenges & Solutions</h3>
          <ul className="list-disc list-inside text-gray-400 leading-relaxed text-lg space-y-2 mb-6">
            <li><strong className="text-white">Maintaining brand style:</strong> Iterated heavily on prompts to ensure the luxury aesthetic of Bulgari was preserved across all AI generations.</li>
          </ul>
          <img src="https://i.postimg.cc/qzcGvr9x/ec4a2aac-a9f6-4320-b294-704471ccfe52.jpg" alt="Bulgari Challenges" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Reflection</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Learned about AI-driven cinematics, prompt engineering for consistency, and creative direction in a purely digital, generative pipeline.
          </p>
        </FadeIn>
      </div>

      <FadeIn>
        <h3 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wider text-center">Final Output</h3>
        <VideoPlayer url="https://www.youtube.com/embed/Ef_Xpqkui-4" />
      </FadeIn>
    </ProjectLayout>
  );
}
