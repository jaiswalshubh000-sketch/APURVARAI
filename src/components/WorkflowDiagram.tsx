import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

interface WorkflowDiagramProps {
  steps: string[];
}

export function WorkflowDiagram({ steps }: WorkflowDiagramProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 py-8">
      {steps.map((step, index) => (
        <FadeIn key={index} delay={index * 0.1} className="flex items-center gap-4">
          <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-gray-300">
            {step}
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="w-5 h-5 text-primary/50" />
          )}
        </FadeIn>
      ))}
    </div>
  );
}
