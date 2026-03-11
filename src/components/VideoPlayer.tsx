interface VideoPlayerProps {
  url: string;
}

export function VideoPlayer({ url }: VideoPlayerProps) {
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");

  return (
    <div className="relative w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {isYouTube ? (
        <iframe
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <video
          src={url}
          controls
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
