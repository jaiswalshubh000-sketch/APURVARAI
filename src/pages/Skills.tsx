import { FadeIn } from "@/src/components/FadeIn";
import { Progress } from "@/src/components/ui/progress";

export function Skills() {
  const categories = [
    {
      title: "Animation & 3D",
      skills: [
        { name: "3D Modeling & Sculpting", value: 85 },
        { name: "Character Design", value: 90 },
        { name: "Animation Fundamentals", value: 80 },
        { name: "Environment Design", value: 85 },
        { name: "Stop Motion Production", value: 75 },
      ],
    },
    {
      title: "Interactive & AI",
      skills: [
        { name: "Interactive Media", value: 80 },
        { name: "Unreal Engine Basics", value: 65 },
        { name: "Unity Basics", value: 60 },
        { name: "AI-Assisted Design & Generation", value: 95 },
      ],
    },
    {
      title: "Production & Leadership",
      skills: [
        { name: "Creative Direction", value: 90 },
        { name: "Team Leadership", value: 85 },
        { name: "Production Management", value: 88 },
        { name: "Sketching", value: 90 },
        { name: "SEO", value: 70 },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <FadeIn>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase text-center md:text-left">
          Technical Arsenal
        </h1>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {categories.map((category, catIndex) => (
          <FadeIn key={category.title} delay={catIndex * 0.2}>
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-primary uppercase tracking-wider border-b border-white/10 pb-4">
                {category.title}
              </h2>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between text-sm font-mono text-gray-400 mb-2 group-hover:text-white transition-colors">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.value}%</span>
                    </div>
                    <Progress value={skill.value} className="h-1.5 bg-zinc-900" />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
