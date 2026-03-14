import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { ProjectSection } from "@/src/components/ProjectSection";
import { ImageGallery } from "@/src/components/ImageGallery";

export function DurgaMataUnreal() {
  const images = [
    "https://drive.google.com/thumbnail?id=1OnnYnWDZfKjrgEP0uzu9-NbmbTQVTPu1&sz=w1920",
    "https://drive.google.com/thumbnail?id=1TDg1ZZTkJhsBviyhS_y_di3Ld-LWGeq6&sz=w1920",
    "https://drive.google.com/thumbnail?id=1Xj5x9cdXLm_mg06BY3ZsVdAzKcC0Z3Jd&sz=w1920",
    "https://drive.google.com/thumbnail?id=1eQFMdIH6Uyw3usX-U9d3lbE3L4TLaG6P&sz=w1920",
    "https://drive.google.com/thumbnail?id=1jl7aGXN0yndiiy3_757doyrxM6xrXVEf&sz=w1920",
    "https://drive.google.com/thumbnail?id=1qA0qrao8IxAUIyTyJo6bCUnrqfghoCuZ&sz=w1920"
  ];

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
        <ImageGallery images={images} />
      </ProjectSection>
    </ProjectLayout>
  );
}
