import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { ProjectSection } from "@/src/components/ProjectSection";

export function DurgaMataUnreal() {
  return (
    <ProjectLayout
      subtitle="3D Environment Development"
      title="DURGA MATA UNREAL"
      tagline="A real-time 3D environment built in Unreal Engine."
    >
      <ProjectSection title="Project Overview">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            An ambitious project focused on creating a highly detailed, culturally significant 3D environment using Unreal Engine. This project explores high-fidelity sculpting, texturing, and real-time rendering techniques to bring a majestic scene to life.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Project Scope">
        <ScopeGrid
          items={[
            { label: "Goal", value: "Create a photorealistic 3D environment" },
            { label: "Focus", value: "Environment design and real-time rendering" },
            { label: "Techniques", value: "3D Sculpting, Texturing, Lighting" },
            { label: "Medium", value: "Unreal Engine 5" },
            { label: "Outcome", value: "A fully explorable real-time scene" },
          ]}
        />
      </ProjectSection>
      
      <ProjectSection title="Visuals">
        <div className="rounded-xl overflow-hidden border border-white/10 aspect-video">
          <img src="https://picsum.photos/seed/durga/1920/1080" alt="Durga Mata Unreal Environment" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
}
