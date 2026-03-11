import { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  tagline: string;
  children: ReactNode;
}

export function ProjectLayout({ title, subtitle, tagline, children }: ProjectLayoutProps) {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="font-mono text-primary mb-4 tracking-wider uppercase text-sm">
              {subtitle}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
              {title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {tagline}
            </p>
          </div>
        </FadeIn>
        
        <div className="space-y-16">
          {children}
        </div>
      </div>
    </div>
  );
}
