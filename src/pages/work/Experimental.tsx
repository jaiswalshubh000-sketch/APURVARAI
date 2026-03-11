import { FadeIn } from "@/src/components/FadeIn";
import { Link } from "react-router-dom";

export function Experimental() {
  const projects = [
    {
      title: "Bulgari AI Ad",
      tagline: "Cinematic AI-Generated Ad",
      image: "https://img.youtube.com/vi/Ef_Xpqkui-4/maxresdefault.jpg",
      link: "/projects/bulgari",
    },
    // Add more experimental projects here
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase text-center md:text-left">
          Experimental Media
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-16 text-center md:text-left">
          Exploring the intersection of AI, generative art, and traditional design to create novel visual experiences.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <Link to={project.link}>
              <div className="group relative h-80 bg-zinc-900 border border-white/10 hover:border-primary/50 overflow-hidden rounded-xl transition-all duration-500">
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
    </div>
  );
}
