import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { ProjectSection } from "@/src/components/ProjectSection";

export function DurgaMataUnreal() {
  return (
    <ProjectLayout
      subtitle="Supporting Project"
      title="DURGA GODDESS UNREAL ENVIRONMENT STUDY"
      tagline="A cinematic real-time environment using Unreal Engine."
    >
      <ProjectSection title="Project Walkthrough">
        <iframe
          src="https://drive.google.com/file/d/1ZNwqbxFKxz1zK3YL0nYCGLJ9AkJ40sdR/preview"
          width="100%"
          style={{ aspectRatio: "16/9", border: "none", borderRadius: "12px" }}
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </ProjectSection>

      <ProjectSection title="Project Overview">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            This project involved creating a hyper-realistic digital sculpture of the Hindu goddess Durga and integrating it into a cinematic real-time environment using Unreal Engine.
          </p>
          <p>
            The objective was to explore the full 3D asset pipeline — from sculpting and retopology to texturing and real-time rendering — while creating a large-scale environmental experience. The sculpture was designed as a monumental stone carving embedded within a mountain, creating the impression of an ancient sacred structure integrated into the natural landscape.
          </p>
          <p>
            The final output was a cinematic environment render showcasing the goddess sculpture within a realistic mountain setting.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Project Snapshot">
        <ScopeGrid
          items={[
            { label: "Project Type", value: "Unreal Engine Environment Study" },
            { label: "Subject", value: "Durga Goddess Stone Sculpture" },
            { label: "Project Category", value: "Solo Project" },
            { label: "Duration", value: "3 Weeks" },
            { label: "Tools Used", value: "ZBrush, Autodesk Maya, Substance Painter, Unreal Engine" },
            { label: "Final Output", value: "Cinematic environment render in Unreal Engine" },
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Concept & Creative Direction">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            The project was inspired by large-scale sacred sculptures and temple carvings found in Indian architecture. The idea was to create a monumental representation of the goddess Durga, carved directly into a mountain surface, giving the impression of an ancient spiritual landmark.
          </p>
          <p>
            The creative direction focused on achieving a hyper-realistic stone material and environmental lighting that would enhance the dramatic presence of the sculpture. The massive scale of the structure was intended to evoke awe and highlight the grandeur often associated with mythological representations of deities.
          </p>
          <p>
            The project combined digital sculpting techniques with real-time environment rendering to create an immersive visual experience.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="My Role">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            This was a solo project, and I handled the entire production pipeline.
          </p>
          <p>Key responsibilities included:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sculpting the high-poly Durga goddess face in ZBrush</li>
            <li>Performing retopology in Maya to optimize the sculpted geometry</li>
            <li>Creating stone textures from scratch in Substance Painter</li>
            <li>Integrating the asset into Unreal Engine for environment development</li>
            <li>Designing the lighting and composition for cinematic presentation</li>
          </ul>
        </div>
      </ProjectSection>

      <ProjectSection title="Workflow">
        <div className="space-y-6">
          {[
            { title: "Sculpting", desc: "The Durga goddess face was sculpted in ZBrush as a high-poly model, focusing on detailed facial features and stone carving aesthetics." },
            { title: "Retopology", desc: "The sculpted model was retopologized in Autodesk Maya to create a manageable mesh structure while preserving the original sculpt detail." },
            { title: "Texturing", desc: "Stone textures were created from scratch in Substance Painter to achieve a realistic carved rock appearance." },
            { title: "Environment Integration", desc: "The asset was imported into Unreal Engine and placed within a mountain environment to create the impression of a monumental sculpture." },
            { title: "Lighting & Composition", desc: "Lighting and camera composition were designed in Unreal Engine to create a cinematic render emphasizing scale and presence." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-mono">
                {i + 1}
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Challenges">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            One of the main challenges was managing the high-poly sculpt while maintaining performance and stability across the pipeline.
          </p>
          <p>Additional challenges:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Retopologizing a highly detailed sculpt while preserving surface detail</li>
            <li>Creating realistic stone textures from scratch</li>
            <li>Achieving believable lighting for a large-scale environmental asset</li>
          </ul>
        </div>
      </ProjectSection>

      <ProjectSection title="Final Output">
        <div className="text-gray-400 leading-relaxed text-lg">
          <p>
            The final output was a cinematic Unreal Engine render featuring a monumental Durga goddess stone sculpture embedded within a mountain environment, demonstrating the full workflow from digital sculpting to real-time environment presentation.
          </p>
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
}
