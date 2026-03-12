import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { Timeline } from "@/src/components/Timeline";
import { WorkflowDiagram } from "@/src/components/WorkflowDiagram";
import { FadeIn } from "@/src/components/FadeIn";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { ProjectGantt } from "@/src/components/ProjectGantt";

export function Nivara() {
  return (
    <ProjectLayout
      subtitle="Interdisciplinary World-Building Project"
      title="NIVARA"
      tagline="Designing a civilization from a Ludo-inspired game mechanics."
    >
      <ScopeGrid
        items={[
          { label: "Duration", value: "3 Weeks" },
          { label: "Team", value: "5 Members" },
          { label: "Output", value: "World Bible, Installation, Visual Assets" },
          { label: "Media", value: "Models, Concept Art, Printed Materials" },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <FadeIn>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Objective</h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            Transform Ludo board mechanics into the framework of a fictional world, establishing rules, culture, and architecture.
          </p>
          <img src="https://i.postimg.cc/hfKSNbnw/34d6ae1a-4f66-46ef-ae35-3f06c99f8eb3.jpg" alt="Nivara Objective" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Concept</h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            The world consists of four elemental cities surrounding a central arena called Niveth. Gameplay serves as a ritual for maintaining balance.
          </p>
          <img src="https://i.postimg.cc/K32ZGtMj/7974e709-afc9-4407-853e-8717c864b291.jpg" alt="Nivara Concept" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </FadeIn>
      </div>

      <FadeIn className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Role & Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-400 leading-relaxed text-lg mb-4">
              <strong className="text-white">Role:</strong> Concept & World Design. Led narrative, city structure, AI concept art.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Collaborated with students from fashion, communications, and product design to build a cohesive universe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://i.postimg.cc/BXNq3LQK/831bcc3c-bdee-463a-8df9-37756666b3d2.jpg" alt="Team Work 1" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/YLzthjNw/92b5bb14-0b78-4b56-976b-f9be6aa253f6.jpg" alt="Team Work 2" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
          </div>
        </div>
      </FadeIn>

      <FadeIn className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-6 uppercase tracking-wider">Timeline & Process</h3>
        <ProjectGantt 
          totalWeeks={3}
          tasks={[
            { name: "World Concept & Lore", startWeek: 0, durationWeeks: 1 },
            { name: "Concept Art & Visuals", startWeek: 0.5, durationWeeks: 1.5 },
            { name: "Installation Building", startWeek: 1.5, durationWeeks: 1.5 },
            { name: "Documentation", startWeek: 2, durationWeeks: 1 }
          ]} 
        />
        <div className="mt-8">
          <Timeline
            items={[
              { title: "Week 1", desc: "World concept and lore development. Establishing the rules of Nivara." },
              { title: "Week 2", desc: "Concept art generation, environment visuals, and character archetypes." },
              { title: "Week 3", desc: "Installation building, documentation, and final presentation prep." },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <img src="https://i.postimg.cc/7JkxHS25/95e01a1b-2bda-4442-b942-8de0b7191e18.jpg" alt="Process 1" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
          <img src="https://i.postimg.cc/1fy9bcSH/9756f0ba-5391-4779-b1a4-2c693132d2cd.jpg" alt="Process 2" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
          <img src="https://i.postimg.cc/GHzcR8hs/a7e78613-2ba6-4882-9975-b6517326748f.jpg" alt="Process 3" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </FadeIn>

      <FadeIn className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Workflow & Tools</h3>
        <WorkflowDiagram steps={["Ideation", "World Building", "Visual Development", "Documentation", "Installation"]} />
        <p className="text-gray-400 leading-relaxed mt-4 font-mono text-sm mb-6">
          Tools: Physical materials (thermocol, wires, craft paper), Adobe tools, AI image generators
        </p>
      </FadeIn>

      <FadeIn className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Production</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <p className="text-gray-400 leading-relaxed text-lg">
            Constructed a 10x10 inch model of Niveth using thermocol, jute, wires; printed cutouts for cities to represent the scale and layout of the world.
          </p>
          <img src="https://i.postimg.cc/D872Rdhj/b28274bb-a378-48e0-8da6-3579d93ee952.jpg" alt="Production" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <FadeIn>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Challenges & Solutions</h3>
          <ul className="list-disc list-inside text-gray-400 leading-relaxed text-lg space-y-2 mb-6">
            <li><strong className="text-white">Concept approval delays:</strong> I refined ideas independently to keep the project moving.</li>
            <li><strong className="text-white">Tight timeline:</strong> Prioritized core deliverables (the model and the world bible) over secondary assets.</li>
          </ul>
          <img src="https://i.postimg.cc/RJLvNq1x/ca7d86e9-fe37-4fbe-ae64-1ff5ec6159ad.jpg" alt="Challenges" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Reflection</h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            Enhanced skills in narrative design and interdisciplinary collaboration, learning how to translate abstract game mechanics into tangible world-building elements.
          </p>
          <img src="https://i.postimg.cc/JHL1rjkt/e38e8351-c536-4360-b763-95fc129d3f77.jpg" alt="Reflection" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </FadeIn>
      </div>

      <FadeIn>
        <h3 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wider text-center">Final Output</h3>
        <div className="mb-12">
          <VideoPlayer url="https://www.youtube.com/embed/JFzLTv7bhSY" />
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="relative rounded-xl overflow-hidden border border-white/10 group">
            <img 
              src="https://i.postimg.cc/ppP23YvB/f091c2b9-9e8d-45b3-978e-8ef02a741082.jpg" 
              alt="Nivara final output" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </FadeIn>
    </ProjectLayout>
  );
}
