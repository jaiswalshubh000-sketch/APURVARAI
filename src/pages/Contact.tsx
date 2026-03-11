import { FadeIn } from "@/src/components/FadeIn";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Linkedin, Mail } from "lucide-react";
import { NeuralBackground } from "@/src/components/NeuralBackground";

export function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="absolute inset-0 z-0">
        <NeuralBackground opacity={0.3} />
      </div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase text-center md:text-left">
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-xl text-gray-400 mb-16 text-center md:text-left">
            Available for freelance and creative projects.
          </p>
        </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <FadeIn delay={0.2}>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-mono text-gray-400">Name</label>
              <Input id="name" placeholder="Your Name" className="w-full bg-white/5 border-white/10 focus-visible:ring-primary" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-mono text-gray-400">Email</label>
              <Input id="email" type="email" placeholder="you@example.com" className="w-full bg-white/5 border-white/10 focus-visible:ring-primary" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-mono text-gray-400">Message</label>
              <Textarea id="message" placeholder="How can we collaborate?" className="w-full bg-white/5 border-white/10 focus-visible:ring-primary" rows={5} />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button type="submit" className="w-full sm:w-1/3">
                Send Message
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full sm:w-1/3 group"
                onClick={() => window.open("https://www.linkedin.com/in/apurvarai", "_blank")}
              >
                <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
              <Button 
                type="button" 
                variant="secondary" 
                className="w-full sm:w-1/3"
                onClick={() => window.location.href = "mailto:apurvarai3031@gmail.com?subject=Booking%20a%20Consultation"}
              >
                Book a Call
              </Button>
            </div>
          </form>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col justify-center space-y-8">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Contact Info</h3>
            
            <div className="space-y-6">
              <a href="mailto:apurvarai3031@gmail.com" className="flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-500 mb-1">Email</p>
                  <p className="text-white group-hover:text-primary transition-colors">apurvarai3031@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/apurvarai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-500 mb-1">LinkedIn</p>
                  <p className="text-white group-hover:text-primary transition-colors">linkedin.com/in/apurvarai</p>
                </div>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
      </div>
    </div>
  );
}
