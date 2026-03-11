import { FadeIn } from "@/src/components/FadeIn";
import { Button } from "@/src/components/ui/button";
import { Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <FadeIn>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 uppercase text-center md:text-left">
          About Me
        </h1>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-8">
          <FadeIn delay={0.2}>
            <div className="relative w-48 h-48 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://i.postimg.cc/Y90QJQqq/27ec90a3-7e14-457f-a584-41c97a956457.jpg"
                alt="Apurva Rai"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full md:rounded-2xl" />
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="w-full space-y-4">
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">Kushinagar, UP, India</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">Design at Karnavati University</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:apurvarai3031@gmail.com" className="font-mono text-sm hover:text-white transition-colors">
                apurvarai3031@gmail.com
              </a>
            </div>
            
            <div className="pt-4">
              <Button asChild className="w-full group">
                <a href="https://www.linkedin.com/in/apurvarai" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-8 space-y-10">
          <FadeIn delay={0.3}>
            <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">
              Profile Summary
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light italic border-l-2 border-primary/50 pl-6">
              "Creativity isn't just an art; it's my way of interpreting the world. I am Apurva Rai, a design student passionate about animation, illustration, and fashion design."
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">
              Creative Philosophy
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                Passionate about working on innovative design projects, I strive to blend traditional storytelling techniques with modern digital tools. My work spans across 2D animation, stop-motion, and AI-assisted world-building, always aiming to evoke emotion and provoke thought through visual narratives.
              </p>
              <p>
                Whether I am meticulously moving clay figures frame by frame for a stop-motion film like <em>Jhapki</em>, or conceptualizing vast, interdisciplinary worlds like <em>Nivara</em>, my goal is to create tactile, immersive experiences. I believe that the best design comes from a deep understanding of the medium and an unwavering commitment to the story.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.7}>
            <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">
              Top Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Sketching", "Search Engine Optimization (SEO)", "Team Leadership", "2D Animation", "Stop Motion", "Creative Direction", "Illustration", "World Building", "Storyboarding"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-gray-300 hover:border-primary/50 hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
