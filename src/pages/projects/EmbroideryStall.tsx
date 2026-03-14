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

      <ProjectSection title="Gallery">
        <ImageGallery images={images} />
      </ProjectSection>
    </ProjectLayout>
  );
}
