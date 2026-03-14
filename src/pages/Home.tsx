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

  const skillsData = [
    {
      category: "Core Skills",
      items: ["Creative Production", "Project Coordination", "Concept Development", "Worldbuilding", "Visual Storytelling"]
    },
    {
      category: "Technical Skills",
      items: ["3D Sculpting", "Environment Development", "Retopology", "Texturing"]
    },
    {
      category: "Creative Skills",
      items: ["Storyboarding", "Animatic Development", "Experimental Animation"]
    },
    {
      category: "AI Skills",
      items: ["Prompt Design", "AI Image Generation", "Generative Concept Development"]
    }
  ];

  const toolsData = [
    {
      category: "3D & Environment Tools",
      items: ["ZBrush", "Blender", "Autodesk Maya", "Unreal Engine", "Substance Painter"]
    },
    {
      category: "Design & Editing",
      items: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Illustrator", "Procreate"]
    },
    {
      category: "AI & Generative Tools",
      items: ["ChatGPT", "Gemini", "Nano Banana", "Suno AI"]
    }
  ];

  const projectsData = [
    { 
      name: "Jhapki", 
      skills: ["Experimental Animation", "Storyboarding", "Creative Production"], 
      tools: ["Adobe Premiere Pro", "Adobe After Effects"],
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
      skills: ["Experimental Animation", "Storyboarding", "Visual Storytelling"], 
      tools: ["Adobe Premiere Pro", "Adobe After Effects", "Procreate"],
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
      skills: ["Worldbuilding", "Concept Development", "Generative Concept Development"], 
      tools: ["ChatGPT", "Gemini", "Nano Banana"],
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
      skills: ["Prompt Design", "AI Image Generation", "Visual Storytelling"], 
      tools: ["ChatGPT", "Nano Banana", "Suno AI", "Adobe After Effects"],
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
      name: "Embroidery Stall", 
      skills: ["Creative Production", "Visual Storytelling"], 
      tools: ["Adobe Premiere Pro", "Adobe After Effects"],
      link: "/projects/embroidery",
      startDate: "May 2024",
      endDate: "May 2024",
      duration: "2 Weeks (14 Days)",
      totalWeeks: 2,
      tasks: [
        { name: "Concept", startWeek: 0, durationWeeks: 0.5 },
        { name: "Production", startWeek: 0.5, durationWeeks: 1 },
        { name: "Editing", startWeek: 1.5, durationWeeks: 0.5 }
      ]
    },
    { 
      name: "Durga Mata Unreal", 
      skills: ["Environment Development", "3D Sculpting", "Worldbuilding"], 
      tools: ["Unreal Engine", "Blender", "Substance Painter"],
      link: "/projects/durga",
      startDate: "Jun 2024",
      endDate: "Jul 2024",
      duration: "4 Weeks (28 Days)",
      totalWeeks: 4,
      tasks: [
        { name: "Concept & Modeling", startWeek: 0, durationWeeks: 1.5 },
        { name: "Texturing", startWeek: 1.5, durationWeeks: 1 },
        { name: "Unreal Setup", startWeek: 2.5, durationWeeks: 1.5 }
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
            <p className="text-xl md:text-2xl text-primary font-mono mb-2 uppercase tracking-widest">
              Creative Producer | Project Coordination
            </p>
            <p className="text-md md:text-lg text-gray-400 font-mono mb-6 uppercase tracking-wider">
              3D Pipeline | Visual Media
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              I focus on the architecture of creative projects—orchestrating ideas, driving team collaboration, and delivering visual outcomes through efficient workflows. With a background in animation, I have directed everything from stop-motion films to experimental media. I thrive at the intersection of creativity and organization, guiding design-driven projects seamlessly from early concept to final execution.
            </p>
          </FadeIn>
        </motion.div>
      </section>

      {/* Skills & Toolkit Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn className="w-full">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12 text-center">Skills & Tools</h2>
          
          <h3 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-16">
            {skillsData.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-bold uppercase tracking-wider mb-4 text-white">
                  {skillGroup.category}
                </h4>
                <div className="space-y-3">
                  {skillGroup.items.map(skill => (
                    <div key={skill} className="flex items-center gap-3">
                      <button
                        onClick={() => handleSkillClick(skill)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-mono transition-all w-full text-left ${selectedSkill === skill ? 'bg-primary/20 text-primary border border-primary/50' : 'bg-black/40 text-gray-400 border border-transparent hover:bg-white/10 hover:text-white'}`}
                      >
                        <span>{skill}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Tools & Software</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {toolsData.map((toolGroup) => (
              <div key={toolGroup.category} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-bold uppercase tracking-wider mb-4 text-white">
                  {toolGroup.category}
                </h4>
                <div className="space-y-3">
                  {toolGroup.items.map(tool => (
                    <div key={tool} className="flex items-center gap-3">
                      <button
                        onClick={() => handleSkillClick(tool)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-mono transition-all w-full text-left ${selectedSkill === tool ? 'bg-primary/20 text-primary border border-primary/50' : 'bg-black/40 text-gray-400 border border-transparent hover:bg-white/10 hover:text-white'}`}
                      >
                        <span>{tool}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
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
            <div className="flex justify-center flex-wrap gap-4 mb-12 border-b border-white/10 pb-4">
          {["LEHER", "JHAPKI", "NIVARA"].map((tab) => (
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

      {/* Supporting Projects Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20 border-t border-white/10">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 text-center">
            Supporting Projects
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Link to="/projects/bulgari" className="block group">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition-colors h-full flex flex-col justify-between">
              <div>
                <div className="rounded-xl overflow-hidden border border-white/10 mb-4 aspect-video">
                  <img src="https://i.postimg.cc/SJLGx4wL/247fcf0a-6455-4294-acdb-dcde02e2e7f5.jpg" alt="Bulgari" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">Bulgari AI Ad</h3>
                <p className="text-gray-400 text-sm mb-4">AI Advertisement</p>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors mt-6 block">View Project &rarr;</span>
            </div>
          </Link>
          <Link to="/projects/embroidery" className="block group">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition-colors h-full flex flex-col justify-between">
              <div>
                <div className="rounded-xl overflow-hidden border border-white/10 mb-4 aspect-video">
                  <img src="https://drive.google.com/thumbnail?id=191jUp6x9GMYpNDX7xisOB2oW8yhH78H5&sz=w1920" alt="Embroidery Stall" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">Embroidery Stall</h3>
                <p className="text-gray-400 text-sm mb-4">Creative Production</p>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors mt-6 block">View Project &rarr;</span>
            </div>
          </Link>
          <Link to="/projects/durga" className="block group">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition-colors h-full flex flex-col justify-between">
              <div>
                <div className="rounded-xl overflow-hidden border border-white/10 mb-4 aspect-video">
                  <img src="https://drive.google.com/thumbnail?id=1OnnYnWDZfKjrgEP0uzu9-NbmbTQVTPu1&sz=w1920" alt="Durga Mata Unreal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">Durga Mata Unreal</h3>
                <p className="text-gray-400 text-sm mb-4">3D Environment</p>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors mt-6 block">View Project &rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Technical Projects Section */}
      <section className="py-24 bg-zinc-900/50 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12 text-center">Technical Projects</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <p className="text-gray-400 text-lg leading-relaxed">
                  A collection of 3D modeling, environment design, and technical art explorations. Showcasing technical exploration, modeling, animation tests, and visual development.
                </p>
                <Link to="/projects/technical" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary hover:bg-primary/90 transition-colors">
                  View Technical Projects
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link to="/projects/technical" className="block group">
                <div className="rounded-xl overflow-hidden border border-white/10 relative aspect-video shadow-2xl">
                  <img src="https://drive.google.com/thumbnail?id=1-wkDFP8V32oTcNBBiBv6gzzDSGBjVBJD&sz=w1920" alt="Technical Projects" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold uppercase tracking-widest border border-white px-6 py-2 rounded-full backdrop-blur-sm">Explore Gallery</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
