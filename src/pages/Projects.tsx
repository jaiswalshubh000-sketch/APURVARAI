import { Link } from "react-router-dom";
import { FadeIn } from "@/src/components/FadeIn";

export function Projects() {
  const allProjects = [
    {
      title: "Jhapki",
      tagline: "Stop Motion Short Film",
      image: "https://i.postimg.cc/vDdfKjNr/35796491-6996-4603-9b59-e17b5d2a8ae2.jpg",
      link: "/projects/jhapki",
      category: "Animation",
    },
    {
      title: "Leher",
      tagline: "Experimental Short Film",
      image: "https://picsum.photos/seed/leher/800/600",
      link: "/projects/leher",
      category: "Animation",
    },
    {
      title: "Nivara",
      tagline: "Interdisciplinary World-Building",
      image: "https://img.youtube.com/vi/JFzLTv7bhSY/maxresdefault.jpg",
      link: "/projects/nivara",
      category: "World Building",
    },
    {
      title: "Bulgari AI Ad",
      tagline: "Cinematic AI-Generated Ad",
      image: "https://img.youtube.com/vi/Ef_Xpqkui-4/maxresdefault.jpg",
      link: "/projects/bulgari",
      category: "Experimental",
    },
    {
      title: "Motion & 3D",
      tagline: "Animation & Unreal Engine Explorations",
      image: "https://img.youtube.com/vi/MEz3UtzaGJM/maxresdefault.jpg",
      link: "/projects/animation-3d",
      category: "Animation",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase text-center md:text-left">
          All Projects
        </h1>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <Link to={project.link}>
              <div className="group relative h-96 bg-zinc-900 border border-white/10 hover:border-primary/50 overflow-hidden rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(229,9,20,0.15)]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-gray-300 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight">{project.title}</h4>
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
