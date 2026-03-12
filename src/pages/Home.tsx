import { Link } from "react-router-dom";
import { FadeIn } from "@/src/components/FadeIn";
import { NeuralBackground } from "@/src/components/NeuralBackground";
import { MiniGantt } from "@/src/components/MiniGantt";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  
  const [activeTab, setActiveTab] = useState("JHAPKI");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const coreSkillsData = [
    {
      name: "2D Animation",
      tools: [
        { name: "After Effects", icon: "✨" },
        { name: "Premiere Pro", icon: "🎬" },
        { name: "Photoshop", icon: "🎨" },
        { name: "Illustrator", icon: "✒️" }
      ]
    },
    {
      name: "Stop Motion",
      tools: [
        { name: "Premiere Pro", icon: "🎬" },
        { name: "After Effects", icon: "✨" }
      ]
    },
    {
      name: "World Building",
      tools: [
        { name: "Unreal Engine", icon: "🎮" },
        { name: "Maya / Blender", icon: "🧊" },
        { name: "Photoshop", icon: "🎨" }
      ]
    },
    {
      name: "Illustration",
      tools: [
        { name: "Illustrator", icon: "✒️" },
        { name: "Photoshop", icon: "🎨" }
      ]
    },
    {
      name: "Creative Direction",
      tools: [
        { name: "AI Tools", icon: "🤖" },
        { name: "Photoshop", icon: "🎨" },
        { name: "Premiere Pro", icon: "🎬" }
      ]
    },
    {
      name: "Storyboarding",
      tools: [
        { name: "Photoshop", icon: "🎨" },
        { name: "Illustrator", icon: "✒️" }
      ]
    }
  ];

  const projectsData = [
    { 
      name: "Jhapki", 
      skills: ["Stop Motion", "Storyboarding", "2D Animation"], 
      tools: ["Premiere Pro", "After Effects", "Photoshop"],
      link: "/projects/jhapki",
      startDate: "Oct 2023",
      endDate: "Nov 2023",
      duration: "6 Weeks (42 Days)",
      totalWeeks: 6,
      tasks: [
        { name: "Pre-production", startWeek: 0, durationWeeks: 1 },
        { name: "Set Construction", startWeek: 1, durationWeeks: 2 },
        { name: "Animation", startWeek: 2, durationWeeks: 3 },
        { name: "Post-production", startWeek: 5, durationWeeks: 1 }
      ]
    },
    { 
      name: "Leher", 
      skills: ["2D Animation", "Storyboarding", "Illustration"], 
      tools: ["Premiere Pro", "After Effects", "Photoshop", "Illustrator"],
      link: "/projects/leher",
      startDate: "Jan 2024",
      endDate: "Jan 2024",
      duration: "2 Weeks (14 Days)",
      totalWeeks: 2,
      tasks: [
        { name: "Concept", startWeek: 0, durationWeeks: 1 },
        { name: "Animation", startWeek: 0.5, durationWeeks: 1 },
        { name: "Sound Design", startWeek: 1, durationWeeks: 1 }
      ]
    },
    { 
      name: "Nivara", 
      skills: ["World Building", "Illustration", "Creative Direction"], 
      tools: ["Photoshop", "AI Tools"],
      link: "/projects/nivara",
      startDate: "Feb 2024",
      endDate: "Mar 2024",
      duration: "3 Weeks (21 Days)",
      totalWeeks: 3,
      tasks: [
        { name: "World Concept", startWeek: 0, durationWeeks: 1 },
        { name: "Concept Art", startWeek: 0.5, durationWeeks: 1.5 },
        { name: "Installation", startWeek: 1.5, durationWeeks: 1.5 },
        { name: "Documentation", startWeek: 2, durationWeeks: 1 }
      ]
    },
    { 
      name: "Bvlgari Ad", 
      skills: ["Creative Direction"], 
      tools: ["AI Tools", "Premiere Pro"],
      link: "/projects/bulgari",
      startDate: "Apr 2024",
      endDate: "Apr 2024",
      duration: "2 Weeks (14 Days)",
      totalWeeks: 2,
      tasks: [
        { name: "Concept", startWeek: 0, durationWeeks: 0.5 },
        { name: "AI Generation", startWeek: 0.5, durationWeeks: 1 },
        { name: "Editing", startWeek: 1.5, durationWeeks: 0.5 }
      ]
    },
    { 
      name: "Mata", 
      skills: ["World Building"], 
      tools: ["Unreal Engine", "Maya / Blender"],
      link: "/projects/animation-3d",
      startDate: "May 2024",
      endDate: "Jun 2024",
      duration: "4 Weeks (28 Days)",
      totalWeeks: 4,
      tasks: [
        { name: "Modeling", startWeek: 0, durationWeeks: 2 },
        { name: "Texturing", startWeek: 1.5, durationWeeks: 1 },
        { name: "Animation", startWeek: 2, durationWeeks: 2 }
      ]
    }
  ];

  const handleSkillClick = (skillOrTool: string) => {
    setSelectedSkill(selectedSkill === skillOrTool ? null : skillOrTool);
    setTimeout(() => {
      document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  const filteredProjects = selectedSkill 
    ? projectsData.filter(p => p.skills.includes(selectedSkill) || p.tools.includes(selectedSkill))
    : [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
        <NeuralBackground opacity={1} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10 pointer-events-none" />
        
        <motion.div style={{ y }} className="relative z-20 text-center px-4 max-w-5xl mx-auto w-full flex flex-col items-center mt-12">
          {/* Profile Picture */}
          <FadeIn delay={0.1}>
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20 mb-8 mx-auto">
              <img
                src="https://i.postimg.cc/Y90QJQqq/27ec90a3-7e14-457f-a584-41c97a956457.jpg"
                alt="Apurva Rai"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase leading-none">
              Apurva Rai
            </h1>
            <p className="text-xl md:text-2xl text-primary font-mono mb-6 uppercase tracking-widest">
              Animator & Visual Storyteller
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Creativity isn't just an art; it's my way of interpreting the world. <br/>
              A design student passionate about animation, illustration, and fashion design. <br/>
              Blending traditional storytelling with modern digital tools.
            </p>
          </FadeIn>

          {/* Core Skills & Toolkit Mapping */}
          <FadeIn delay={0.6} className="w-full max-w-5xl mx-auto mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Core Skills & Toolkit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {coreSkillsData.map((skillGroup) => (
                <div key={skillGroup.name} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <button 
                    onClick={() => handleSkillClick(skillGroup.name)}
                    className={`text-xl font-bold uppercase tracking-wider mb-4 transition-colors ${selectedSkill === skillGroup.name ? 'text-primary' : 'text-white hover:text-primary/80'}`}
                  >
                    {skillGroup.name}
                  </button>
                  <div className="space-y-3">
                    {skillGroup.tools.map(tool => (
                      <div key={tool.name} className="flex items-center gap-3">
                        <div className="w-px h-4 bg-white/20 ml-2" />
                        <button
                          onClick={() => handleSkillClick(tool.name)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-mono transition-all ${selectedSkill === tool.name ? 'bg-primary/20 text-primary border border-primary/50' : 'bg-black/40 text-gray-400 border border-transparent hover:bg-white/10 hover:text-white'}`}
                        >
                          <span>{tool.icon}</span>
                          <span>{tool.name}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </motion.div>
      </section>

      {/* Featured Projects Tabs */}
      <section id="projects-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 text-center">
            {selectedSkill ? `Projects using ${selectedSkill}` : "Featured Projects"}
          </h2>
        </FadeIn>
        
        {selectedSkill ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map(project => (
              <Link key={project.name} to={project.link} className="block group">
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition-colors h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-primary transition-colors">{project.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map(s => (
                        <span key={s} className={`text-xs font-mono px-2 py-1 rounded-full ${s === selectedSkill ? 'bg-primary/20 text-primary border border-primary/50' : 'bg-black/30 text-gray-400'}`}>
                          {s}
                        </span>
                      ))}
                      {project.tools.map(t => (
                        <span key={t} className={`text-xs font-mono px-2 py-1 rounded-full ${t === selectedSkill ? 'bg-primary/20 text-primary border border-primary/50' : 'bg-black/30 text-gray-500 border border-white/5'}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mb-6 space-y-1 text-xs font-mono text-gray-400">
                      <div className="flex justify-between">
                        <span>Start:</span>
                        <span className="text-white">{project.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>End:</span>
                        <span className="text-white">{project.endDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="text-primary">{project.duration}</span>
                      </div>
                    </div>
                    <MiniGantt tasks={project.tasks} totalWeeks={project.totalWeeks} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors mt-6 block">View Project &rarr;</span>
                </div>
              </Link>
            ))}
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-12 text-gray-500 font-mono">
                No projects found using this skill/tool yet.
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-12 border-b border-white/10 pb-4">
          {["JHAPKI", "LEHER", "NIVARA"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl md:text-2xl font-bold uppercase tracking-wider transition-colors px-4 py-2 ${activeTab === tab ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-gray-300"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[50vh]">
          {activeTab === "JHAPKI" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 uppercase">Jhapki</h3>
                <p className="text-primary font-mono mb-6">Stop Motion Short Film</p>
                <p className="text-gray-400 text-lg mb-8">A tactile exploration of dreams and reality through stop-motion animation. Every frame was meticulously crafted by hand using clay, paper, and wire.</p>
                <Link to="/projects/jhapki" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary hover:bg-primary/90 transition-colors">
                  View Full Project
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img src="https://i.postimg.cc/vDdfKjNr/35796491-6996-4603-9b59-e17b5d2a8ae2.jpg" alt="Jhapki" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          )}
          {activeTab === "LEHER" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 uppercase">Leher</h3>
                <p className="text-primary font-mono mb-6">Experimental Short Film</p>
                <p className="text-gray-400 text-lg mb-8">Exploring the emotional contrast between fear and calmness. Inspired by the monsoon, water, and Rasa. 'Leher' means 'wave' – symbolizing rising and falling emotions.</p>
                <Link to="/projects/leher" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary hover:bg-primary/90 transition-colors">
                  View Full Project
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img src="https://picsum.photos/seed/leher/800/600" alt="Leher" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          )}
          {activeTab === "NIVARA" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 uppercase">Nivara</h3>
                <p className="text-primary font-mono mb-6">Interdisciplinary World-Building</p>
                <p className="text-gray-400 text-lg mb-8">A massive world-building project combining 2D animation, lore crafting, and environment design to create a fully realized fictional universe.</p>
                <Link to="/projects/nivara" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary hover:bg-primary/90 transition-colors">
                  View Full Project
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img src="https://img.youtube.com/vi/JFzLTv7bhSY/maxresdefault.jpg" alt="Nivara" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          )}
        </div>
          </>
        )}
      </section>

      {/* Supporting Projects */}
      <section className="py-24 bg-zinc-900/50 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12 text-center">Supporting Projects</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BVLGARI */}
            <FadeIn delay={0.1} className="group cursor-pointer">
              <Link to="/projects/bulgari">
                <div className="aspect-video bg-black rounded-xl overflow-hidden border border-white/10 mb-4 relative">
                  <img src="https://i.postimg.cc/SJLGx4wL/247fcf0a-6455-4294-acdb-dcde02e2e7f5.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold uppercase">Bvlgari Ad</h3>
                <p className="text-gray-500 font-mono text-sm">AI Advertisement</p>
              </Link>
            </FadeIn>
            {/* MATA */}
            <FadeIn delay={0.2} className="group cursor-pointer">
              <Link to="/projects/animation-3d">
                <div className="aspect-video bg-black rounded-xl overflow-hidden border border-white/10 mb-4 relative">
                  <img src="https://i.postimg.cc/xcdKnmyy/06ce643d-2496-4fad-bc90-22ce80299ef2.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold uppercase">Mata</h3>
                <p className="text-gray-500 font-mono text-sm">Unreal Engine Project</p>
              </Link>
            </FadeIn>
            {/* EMBROIDERY STALL */}
            <FadeIn delay={0.3} className="group cursor-pointer">
              <div className="aspect-video bg-zinc-800 rounded-xl overflow-hidden border border-white/10 mb-4 relative flex items-center justify-center">
                <span className="text-gray-500 font-mono">Coming Soon</span>
              </div>
              <h3 className="text-xl font-bold uppercase">Embroidery Stall</h3>
              <p className="text-gray-500 font-mono text-sm">Physical Installation</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Technical Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12 text-center">Technical Projects</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <a href="https://www.youtube.com/watch?v=4V5Iz99Qpks" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="rounded-xl overflow-hidden border border-white/10 mb-6 relative aspect-video">
                <img src="https://img.youtube.com/vi/4V5Iz99Qpks/maxresdefault.jpg" alt="Bot Moving" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold uppercase tracking-widest border border-white px-6 py-2 rounded-full backdrop-blur-sm">Watch Video</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">Bot Moving</h3>
              <p className="text-gray-400 font-mono text-sm">A mechanical walk cycle study conveying heavy machinery with a smooth gait.</p>
            </a>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link to="/projects/leher" className="block group">
              <div className="rounded-xl overflow-hidden border border-white/10 mb-6 relative aspect-video">
                <img src="https://img.youtube.com/vi/5ViDti_Ly4k/maxresdefault.jpg" alt="Ocean Animation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold uppercase tracking-widest border border-white px-6 py-2 rounded-full backdrop-blur-sm">View Project</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">Leher (Ocean Animation)</h3>
              <p className="text-gray-400 font-mono text-sm">Exploring fluid motion and character dynamics through 2D and 3D techniques.</p>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Timeline (Gantt Style) */}
      <section className="py-24 bg-zinc-900/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12 text-center">Production Timeline & Staff</h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
              A beautifully orchestrated workflow involving dedicated team members across various stages of production.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
