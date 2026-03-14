export function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {images.map((src, i) => (
        <div key={i} className="relative overflow-hidden rounded-xl border border-white/10 group break-inside-avoid shadow-lg">
          <img
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
