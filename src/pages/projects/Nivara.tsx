import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { Timeline } from "@/src/components/Timeline";
import { WorkflowDiagram } from "@/src/components/WorkflowDiagram";
import { FadeIn } from "@/src/components/FadeIn";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { ProjectGantt } from "@/src/components/ProjectGantt";
import { ProjectSection } from "@/src/components/ProjectSection";

export function Nivara() {
  return (
    <ProjectLayout
      subtitle="Interdisciplinary World-Building Project"
      title="NIVARA"
      tagline="Designing a civilization from a Ludo-inspired game mechanics."
    >
      <ProjectSection title="Project Scope">
        <ScopeGrid
          items={[
            { label: "Project Type", value: "World-Building & Installation" },
            { label: "Duration", value: "3 Weeks" },
            { label: "Team Size", value: "5 Members" },
            { label: "Role", value: "Concept & World Design Lead" },
          ]}
        />
        <div className="mt-8 text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            Nivara was an interdisciplinary project that challenged us to create a comprehensive fictional world based on the mechanics of a traditional board game. We chose Ludo as our foundation.
          </p>
          <p>
            The project required developing the lore, culture, architecture, and visual identity of this world, culminating in a physical installation and a detailed "World Bible" documenting our creation.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Creative Objective">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-400 leading-relaxed text-lg space-y-4">
            <p>
              The primary objective was to transform the abstract rules and mechanics of Ludo into a believable, structured civilization.
            </p>
            <p>
              We conceptualized a world consisting of four distinct elemental cities (representing the four colors in Ludo) surrounding a central, sacred arena called Niveth (the "home" square). The gameplay of Ludo was re-imagined as a vital cultural ritual performed by the inhabitants to maintain balance and harmony within their universe.
            </p>
          </div>
          <img src="https://i.postimg.cc/hfKSNbnw/34d6ae1a-4f66-46ef-ae35-3f06c99f8eb3.jpg" alt="Nivara Objective" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>

      <ProjectSection title="Challenges & Solutions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <div>
              <strong className="text-white block mb-2">Challenge 1</strong>
              <p>Delays in getting concept approvals from faculty slowed down the initial production phase.</p>
              <strong className="text-white block mt-2 mb-2">Solution</strong>
              <p>I took the initiative to refine ideas independently and present more polished concepts, which helped accelerate the approval process and keep the project moving.</p>
            </div>
            <div>
              <strong className="text-white block mb-2">Challenge 2</strong>
              <p>The 3-week timeline was extremely tight for both world-building and physical construction.</p>
              <strong className="text-white block mt-2 mb-2">Solution</strong>
              <p>We prioritized the core deliverables—the physical model of Niveth and the World Bible—over secondary assets to ensure a high-quality final presentation.</p>
            </div>
          </div>
          <img src="https://i.postimg.cc/RJLvNq1x/ca7d86e9-fe37-4fbe-ae64-1ff5ec6159ad.jpg" alt="Challenges" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>

      <ProjectSection title="Concept Art & World Building">
        <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-white">Pre-Production Sketches & World-Building Concepts</h3>
        
        {/* Horizontal Scrollable Gallery */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {/* 
            const NIVARA_MEDIA = [
              // ADD FILE IDs HERE
              // Format: { id: 'FILE_ID', type: 'image', label: 'description' }
            ];
          */}
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="min-w-[300px] md:min-w-[400px] bg-zinc-900 border border-white/10 rounded-xl overflow-hidden snap-center group flex-shrink-0">
              <div className="aspect-video bg-black/50 flex flex-col items-center justify-center text-gray-500">
                <svg className="w-8 h-8 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span className="font-mono text-xs uppercase tracking-widest">Concept Art</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-gray-400 font-mono text-sm mb-8 italic">
          Early concept sketches and idea-phase explorations for the Nivara world — characters, environments, and visual language.
        </p>
        
        <div className="text-center mb-12">
          <a 
            href="https://drive.google.com/drive/folders/1yisIvRAskO53i6ihBHou1ow6ppWnT_5O?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors uppercase tracking-widest text-sm"
          >
            View Full Concept Art Folder →
          </a>
        </div>

        {/* Additional Visual Elements (2C) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-black text-primary mb-2">4</div>
            <div className="text-white font-bold uppercase tracking-widest text-sm mb-2">Elemental Factions</div>
            <p className="text-gray-500 text-xs font-mono">Earth, Water, Fire, Air — each representing a unique culture and architectural style derived from the Ludo board corners.</p>
          </div>
          <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-black text-primary mb-2">1</div>
            <div className="text-white font-bold uppercase tracking-widest text-sm mb-2">Central Arena (Niveth)</div>
            <p className="text-gray-500 text-xs font-mono">The sacred convergence point where the ritualistic game is played to maintain universal balance.</p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Final Outcome">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-400 leading-relaxed text-lg space-y-4">
            <p>
              The final outcome was a fully realized fictional universe presented through a detailed World Bible and a physical installation.
            </p>
            <p>
              This project significantly enhanced my skills in narrative design, world-building, and interdisciplinary collaboration. It demonstrated the ability to translate abstract game mechanics into tangible, cohesive design elements across various media.
            </p>
          </div>
          <img src="https://i.postimg.cc/JHL1rjkt/e38e8351-c536-4360-b763-95fc129d3f77.jpg" alt="Reflection" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
}
