import { FadeIn } from "@/src/components/FadeIn";

export function Sketchbook() {
  // Placeholder images for process work, sketches, and behind-the-scenes
  const sketches = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/seed/sketch${i}/600/${Math.floor(Math.random() * 300) + 400}?grayscale`,
    alt: `Process sketch ${i + 1}`,
    caption: i % 3 === 0 ? "Character Exploration" : i % 2 === 0 ? "Storyboard Roughs" : "Environment Concept",
  }));

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
            The <span className="text-primary">Sketchbook</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A look behind the scenes. Rough animations, character explorations, storyboards, and the messy process of creation.
          </p>
        </div>
      </FadeIn>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {sketches.map((sketch, index) => (
          <FadeIn key={sketch.id} delay={(index % 4) * 0.1}>
            <div className="relative overflow-hidden rounded-lg border border-white/10 group break-inside-avoid bg-zinc-900">
              <img
                src={sketch.src}
                alt={sketch.alt}
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-mono text-xs text-primary uppercase tracking-wider">{sketch.caption}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
