import { FadeIn } from "./FadeIn";

interface ScopeItem {
  label: string;
  value: string;
}

interface ScopeGridProps {
  items: ScopeItem[];
}

export function ScopeGrid({ items }: ScopeGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-white/10">
      {items.map((item, index) => (
        <FadeIn key={index} delay={index * 0.1}>
          <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-primary/50 transition-colors">
            <h5 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
              {item.label}
            </h5>
            <p className="font-medium text-white">{item.value}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
