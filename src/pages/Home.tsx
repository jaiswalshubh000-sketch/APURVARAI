import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";
import { FadeIn } from "@/src/components/FadeIn";
import { NeuralBackground } from "@/src/components/NeuralBackground";
import { VideoPlayer } from "@/src/components/VideoPlayer";

export function Home() {
  const featuredProjects = [
    {
      title: "Jhapki",
      tagline: "Stop Motion Short Film",
      image: "https://i.postimg.cc/vDdfKjNr/35796491-6996-4603-9b59-e17b5d2a8ae2.jpg",
      link: "/projects/jhapki",
    },
    {
      title: "Leher",
      tagline: "Experimental Short Film",
      image: "https://picsum.photos/seed/leher/800/600",
      link: "/projects/leher",
    },
    {
      title: "Nivara",
      tagline: "Interdisciplinary World-Building",
      image: "https://img.youtube.com/vi/JFzLTv7bhSY/maxresdefault.jpg",
      link: "/projects/nivara",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
        <NeuralBackground opacity={1} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10 pointer-events-none" />
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto w-full">
          <FadeIn delay={0.2}>
            <p className="font-mono text-primary mb-6 tracking-widest uppercase text-sm md:text-base">
              Animator & Visual Storyteller
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 uppercase leading-none">
              Crafting Worlds <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Through Animation
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Apurva Rai is a design student with a passion for storytelling through 2D animation, stop motion, and illustration.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/commissions">Book a Commission</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/resume">View Resume</Link>
            </Button>
          </FadeIn>

          {/* Demo Reel Section - Front and Center based on industry best practices */}
          <FadeIn delay={1.0} className="w-full max-w-4xl mx-auto mt-8">
            <div className="mb-4 text-left flex justify-between items-end">
              <h2 className="text-2xl font-bold uppercase tracking-wider">Nivara - World Building</h2>
              <span className="font-mono text-sm text-primary">02:26</span>
            </div>
            <div className="ring-1 ring-white/10 rounded-xl p-2 bg-white/5 backdrop-blur-sm">
              <VideoPlayer url="https://www.youtube.com/embed/JFzLTv7bhSY" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Featured Projects</h2>
            <Link to="/projects" className="text-primary hover:text-white transition-colors font-mono text-sm uppercase tracking-wider">
              View All →
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.2}>
              <Link to={project.link}>
                <div className="group relative h-80 bg-zinc-900 border border-white/10 hover:border-primary/50 overflow-hidden rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(229,9,20,0.15)]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">{project.title}</h4>
                    <p className="text-primary font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
