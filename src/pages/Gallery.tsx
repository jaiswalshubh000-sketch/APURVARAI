import { FadeIn } from "@/src/components/FadeIn";

export function Gallery() {
  // Generate some placeholder images for the masonry grid
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/seed/gallery${i}/800/${Math.floor(Math.random() * 400) + 600}`,
    alt: `Gallery image ${i + 1}`,
  }));

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase text-center md:text-left">
          Gallery
        </h1>
      </FadeIn>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, index) => (
          <FadeIn key={img.id} delay={(index % 3) * 0.1}>
            <div className="relative overflow-hidden rounded-xl border border-white/10 group break-inside-avoid">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
