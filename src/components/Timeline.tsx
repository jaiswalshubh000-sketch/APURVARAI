import { FadeIn } from "./FadeIn";

interface TimelineItem {
  title: string;
  desc: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-8">
      {items.map((item, index) => (
        <FadeIn key={index} delay={index * 0.1}>
          <div className="relative pl-8">
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
            <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
