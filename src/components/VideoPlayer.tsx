interface VideoPlayerProps {
  url: string;
}

export function VideoPlayer({ url }: VideoPlayerProps) {
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");
  const isGoogleDrive = url.includes("drive.google.com");

  let embedUrl = url;
  if (isYouTube) {
    // Convert watch?v= or youtu.be to embed
    let videoId = "";
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    } else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1]?.split("&")[0];
    }
    if (videoId) {
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  } else if (isGoogleDrive) {
    // Convert /view?usp=sharing to /preview
    embedUrl = url.replace(/\/view.*$/, "/preview");
  }

  return (
    <div className="relative w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {isYouTube || isGoogleDrive ? (
        <iframe
          src={embedUrl}
          title="Video player"
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
