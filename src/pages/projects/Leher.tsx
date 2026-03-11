import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { Timeline } from "@/src/components/Timeline";
import { WorkflowDiagram } from "@/src/components/WorkflowDiagram";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { FadeIn } from "@/src/components/FadeIn";

export function Leher() {
  return (
    <ProjectLayout
      subtitle="Experimental Short Film"
      title="LEHER"
      tagline="Exploring the emotional contrast between fear and calmness."
    >
      <ScopeGrid
        items={[
          { label: "Duration", value: "2 Weeks" },
          { label: "Team", value: "5 Members" },
          { label: "Output", value: "1-minute film" },
          { label: "Media", value: "2D Animation, Stop Motion, Live Footage" },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Objective</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Represent emotional transitions between fear and calmness using visuals and sound, without a traditional narrative.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Concept</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Inspired by the monsoon, water, and Rasa. 'Leher' means 'wave' – symbolizing rising and falling emotions.
          </p>
        </FadeIn>
      </div>

      <FadeIn>
        <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Role & Team</h3>
        <p className="text-gray-400 leading-relaxed text-lg mb-4">
          <strong className="text-white">Role:</strong> Director & Visual Planner. Led concept and animatics, 2D character design (Procreate), guiding team.
        </p>
        <p className="text-gray-400 leading-relaxed text-lg">
          Collaborated with a team of 4 other designers focusing on sound, stop-motion execution, and post-production.
        </p>
      </FadeIn>

      <FadeIn>
        <h3 className="text-2xl font-bold text-primary mb-6 uppercase tracking-wider">Timeline</h3>
        <Timeline
          items={[
            { title: "Week 1", desc: "Concept & storyboarding. Establishing the visual language and emotional beats." },
            { title: "Week 2", desc: "Animation, stop-motion shoots, sound design, editing, and final compositing." },
          ]}
        />
      </FadeIn>

      <FadeIn>
        <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Workflow & Tools</h3>
        <WorkflowDiagram steps={["Ideation", "Storyboarding", "Animation", "Sound Design", "Editing"]} />
        <p className="text-gray-400 leading-relaxed mt-4 font-mono text-sm">
          Tools: Procreate, Premiere Pro, After Effects
        </p>
      </FadeIn>

      <FadeIn>
        <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Production</h3>
        <p className="text-gray-400 leading-relaxed text-lg">
          2D character animation drawn in Procreate; stop-motion waves created with grains (rice/pulses); ocean footage captured for metaphor; final edit compiled in Premiere Pro.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Challenges & Solutions</h3>
          <ul className="list-disc list-inside text-gray-400 leading-relaxed text-lg space-y-2">
            <li><strong className="text-white">Time-intensive stop-motion:</strong> We simplified scenes to focus on texture rather than complex movement.</li>
            <li><strong className="text-white">Team coordination:</strong> Implemented daily check-ins to align visual styles.</li>
          </ul>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Reflection</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Learned how abstract visuals can powerfully convey emotion, and the critical importance of clear communication in mixed-media projects.
          </p>
        </FadeIn>
      </div>

      <FadeIn>
        <h3 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wider text-center">Final Output</h3>
        <VideoPlayer url="https://www.youtube.com/embed/dQw4w9WgXcQ" />
      </FadeIn>
    </ProjectLayout>
  );
}
