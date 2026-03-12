import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { Timeline } from "@/src/components/Timeline";
import { WorkflowDiagram } from "@/src/components/WorkflowDiagram";
import { FadeIn } from "@/src/components/FadeIn";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { ProjectGantt } from "@/src/components/ProjectGantt";

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
      <ScopeGrid
        items={[
          { label: "Medium", value: "Stop Motion Animation" },
          { label: "Role", value: "Director, Animator, Set Designer" },
          { label: "Output", value: "Short Film & BTS Documentation" },
          { label: "Materials", value: "Clay, Paper, Wire, Found Objects" },
        ]}
      />

      <FadeIn className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-6 uppercase tracking-wider">Final Film</h3>
        <div className="rounded-xl overflow-hidden border border-white/10">
          <VideoPlayer url="https://www.youtube.com/embed/YOUR_JHAPKI_VIDEO_ID" />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <FadeIn>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Concept</h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            "Jhapki" (a short nap or doze) explores the surreal, fleeting moments between wakefulness and sleep. The film uses physical materials to ground abstract, dream-like sequences in a tangible reality.
          </p>
          <img src="https://i.postimg.cc/vDdfKjNr/35796491-6996-4603-9b59-e17b5d2a8ae2.jpg" alt="Jhapki Concept" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Process</h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            Every frame was meticulously crafted by hand. The sets were built using everyday materials, emphasizing texture and lighting to create a moody, atmospheric environment.
          </p>
          <img src="https://i.postimg.cc/GTrLjvzf/38772ed2-d0f4-40e1-be3a-be23a4cae794.jpg" alt="Jhapki Process" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </FadeIn>
      </div>

      <FadeIn className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-6 uppercase tracking-wider">Production Timeline</h3>
        <ProjectGantt 
          totalWeeks={6}
          tasks={[
            { name: "Pre-production & Storyboarding", startWeek: 0, durationWeeks: 1 },
            { name: "Set Construction & Rigging", startWeek: 1, durationWeeks: 2 },
            { name: "Stop Motion Animation", startWeek: 2, durationWeeks: 3 },
            { name: "Post-production & Sound", startWeek: 5, durationWeeks: 1 }
          ]} 
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
          <Timeline
            items={[
              { title: "Pre-production", desc: "Storyboarding, character design, and material sourcing." },
              { title: "Set Construction", desc: "Building miniature sets, rigging armatures, and setting up lighting." },
              { title: "Animation", desc: "Frame-by-frame shooting, adjusting micro-movements to bring characters to life." },
              { title: "Post-production", desc: "Color grading, sound design, and final compositing." },
            ]}
          />
          <div className="grid grid-cols-2 gap-4">
            <img src="https://i.postimg.cc/0rqD43Bm/51582182-a166-4285-ac07-627e50ff11da.jpg" alt="Timeline 1" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/w3cLYVCw/5b1e72a2-c576-42ee-907d-4ca76cca8f7a.jpg" alt="Timeline 2" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
          </div>
        </div>
      </FadeIn>

      <FadeIn className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Workflow</h3>
        <WorkflowDiagram steps={["Storyboarding", "Set Building", "Lighting Setup", "Stop Motion Shooting", "Editing & Sound"]} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <img src="https://i.postimg.cc/JtWZFg2K/88e2f619-fe03-45e2-89f2-b0be9e95e196.jpg" alt="Workflow 1" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
          <img src="https://i.postimg.cc/MX8VL4Fd/90ea06e4-9be6-4656-bc37-028416fe4af3.jpg" alt="Workflow 2" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </FadeIn>

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
