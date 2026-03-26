import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { ProjectSection } from "@/src/components/ProjectSection";
import { ImageGallery } from "@/src/components/ImageGallery";

export function EmbroideryStall() {
  const images = [
    "https://drive.google.com/thumbnail?id=191jUp6x9GMYpNDX7xisOB2oW8yhH78H5&sz=w1920",
    "https://drive.google.com/thumbnail?id=19tx5KSpMe4rU4WdYbXiuwnOIzJYhHnoO&sz=w1920",
    "https://drive.google.com/thumbnail?id=1GG32UTQoLf_GurPBRtIYdyv7y8TScCnA&sz=w1920",
    "https://drive.google.com/thumbnail?id=1IwHJdfJ51G1dFD6YEnp1TWdx1ZB3m5ng&sz=w1920",
    "https://drive.google.com/thumbnail?id=1SL62PqDKlS2wNb1AeyJawbCGSi4dCu44&sz=w1920",
    "https://drive.google.com/thumbnail?id=1n3F141DRWGcPLLRgPBdFhqFW4hOsUefs&sz=w1920"
  ];

  return (
    <ProjectLayout
      subtitle="Creative Production"
      title="EMBROIDERY STALL"
      tagline="A visual exploration of traditional crafts through modern media."
    >
      <ProjectSection title="Project Overview">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            This project focuses on capturing the intricate details and vibrant colors of a traditional embroidery stall. Through careful art direction and visual storytelling, the essence of the craft is brought to life.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Project Scope">
        <ScopeGrid
          items={[
            { label: "Goal", value: "Showcase traditional embroidery" },
            { label: "Focus", value: "Visual storytelling and art direction" },
            { label: "Techniques", value: "Photography, Editing" },
            { label: "Medium", value: "Digital Media" },
            { label: "Outcome", value: "A curated collection of visuals" },
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Supporting Sub-Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center border border-white/5 overflow-hidden">
              <img src="https://drive.google.com/thumbnail?id=19tx5KSpMe4rU4WdYbXiuwnOIzJYhHnoO&sz=w1920" alt="Thread Sourcing" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-white">Thread Sourcing</h3>
            <p className="text-gray-400 text-sm font-mono">Documenting the procurement of raw materials and color matching processes.</p>
          </div>
          <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center border border-white/5 overflow-hidden">
              <img src="https://drive.google.com/thumbnail?id=1GG32UTQoLf_GurPBRtIYdyv7y8TScCnA&sz=w1920" alt="Pattern Design" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-white">Pattern Design</h3>
            <p className="text-gray-400 text-sm font-mono">Translating traditional motifs into digital blueprints for modern production.</p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Gallery">
        <ImageGallery images={images} />
      </ProjectSection>
    </ProjectLayout>
  );
}
