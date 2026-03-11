import { FadeIn } from "@/src/components/FadeIn";
import { Button } from "@/src/components/ui/button";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

export function Resume() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">
            Curriculum <span className="text-primary">Vitae</span>
          </h1>
          <p className="text-xl text-gray-400">
            Apurva Rai — Animator, Illustrator & Designer
          </p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </FadeIn>

      <div className="space-y-16">
        {/* Experience */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold uppercase tracking-wider">Experience</h2>
          </div>
          <div className="space-y-12 pl-4 md:pl-10 border-l border-white/10 ml-3">
            <div className="relative">
              <span className="absolute -left-[45px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
              <h3 className="text-xl font-bold text-white">Freelance Animator & Illustrator</h3>
              <p className="font-mono text-sm text-primary mb-4">2023 — Present</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400">
                <li>Directed and animated short films including "Leher", managing a team of 5.</li>
                <li>Created character designs and storyboards for independent game developers.</li>
                <li>Produced high-quality digital illustrations for various commercial clients.</li>
              </ul>
            </div>
            <div className="relative">
              <span className="absolute -left-[45px] top-1.5 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background" />
              <h3 className="text-xl font-bold text-white">Creative Lead (Student Project)</h3>
              <p className="font-mono text-sm text-gray-500 mb-4">2022 — 2023</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400">
                <li>Led the world-building project "Nivara", coordinating between fashion, product, and communication designers.</li>
                <li>Developed the core narrative bible and conceptualized the visual language.</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold uppercase tracking-wider">Education</h2>
          </div>
          <div className="space-y-8 pl-4 md:pl-10 border-l border-white/10 ml-3">
            <div className="relative">
              <span className="absolute -left-[45px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
              <h3 className="text-xl font-bold text-white">B.Des in Visual Communication</h3>
              <p className="text-lg text-gray-300">Karnavati University</p>
              <p className="font-mono text-sm text-primary mt-1">Expected Graduation: 2026</p>
            </div>
          </div>
        </FadeIn>

        {/* Software & Tools */}
        <FadeIn delay={0.3}>
          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold uppercase tracking-wider">Software & Tools</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Procreate', 'Adobe After Effects', 'Adobe Premiere Pro', 'Photoshop', 'Illustrator', 'Figma', 'Unreal Engine (Basics)', 'Midjourney / AI Tools'].map((tool) => (
              <div key={tool} className="p-4 bg-white/5 border border-white/10 rounded-lg text-center font-mono text-sm text-gray-300 hover:border-primary/50 transition-colors">
                {tool}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
