import { FadeIn } from "@/src/components/FadeIn";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import React, { useState } from "react";

export function Commissions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "2D Animation",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Commission Inquiry - ${formData.serviceType}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.details}`);
    window.location.href = `mailto:apurvarai3031@gmail.com?subject=${subject}&body=${body}`;
  };

  const services = [
    {
      title: "2D Animation",
      price: "Contact for Quote",
      desc: "Fully colored and shaded frame-by-frame 2D animation. Perfect for music videos, intros, and short films.",
      includes: ["Storyboarding", "Rough Animation", "Clean-up & Color", "Compositing"],
    },
    {
      title: "Character Design",
      price: "Contact for Quote",
      desc: "Detailed character turnarounds and expression sheets for animation, games, or personal projects.",
      includes: ["Front, Side, Back views", "3 Expressions", "Color Palette", "Commercial Rights (Optional)"],
    },
    {
      title: "Illustration",
      price: "Contact for Quote",
      desc: "High-quality digital illustrations for editorial, posters, or promotional material.",
      includes: ["Concept Sketches", "High-Res File", "2 Revisions", "Source File (PSD/Procreate)"],
    },
    {
      title: "Custom Commission",
      price: "Contact for Quote",
      desc: "Have a unique project in mind? Let's discuss your specific needs and create something tailored to you.",
      includes: ["Tailored Workflow", "Flexible Output", "Custom Timeline", "Dedicated Consultation"],
    },
  ];

  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Timelines vary greatly depending on the scope. A single illustration might take 1-2 weeks, while a 30-second animation could take 4-6 weeks. I will provide a clear timeline during our initial consultation."
    },
    {
      q: "What is your payment structure?",
      a: "I typically require a 50% non-refundable deposit upfront to secure your slot in my schedule, with the remaining 50% due upon project completion before final files are delivered."
    },
    {
      q: "Do you offer revisions?",
      a: "Yes! Every project includes a set number of revisions (usually 2-3) during the sketch/rough phase. Major changes requested after the final rendering phase may incur additional fees."
    },
    {
      q: "Can you work with a specific art style?",
      a: "While I have my own distinct style, I am highly adaptable. Please provide reference images of the style you are aiming for, and we can discuss if it's a good fit."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
            Commission <span className="text-primary">Work</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Available for freelance animation, illustration, and design services. Review my packages below and fill out the form to get started.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.1}>
            <div className="h-full p-8 bg-zinc-900 border border-white/10 rounded-2xl hover:border-primary/50 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">{service.title}</h3>
              <p className="font-mono text-primary mb-6">{service.price}</p>
              <p className="text-gray-400 mb-8">{service.desc}</p>
              <ul className="space-y-3">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300">
                    <span className="text-primary mr-2">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <FadeIn delay={0.2}>
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">How It Works</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-mono">01</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Inquiry & Quote</h4>
                <p className="text-gray-400">Fill out the form below with your project details. I'll review it and get back to you with a custom quote and timeline.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-mono">02</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Concept & Sketch</h4>
                <p className="text-gray-400">Once the deposit is paid, I'll create rough sketches or storyboards for your approval. This is the best time for major revisions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-mono">03</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Production & Delivery</h4>
                <p className="text-gray-400">After sketch approval, I move into final production (clean-up, color, animation). Final files are delivered upon final payment.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">F.A.Q.</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/10 pb-6 last:border-0">
                <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.4}>
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight text-center">Request a Quote</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">Name</label>
                <Input 
                  placeholder="Your Name" 
                  className="bg-black/50" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">Email</label>
                <Input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="bg-black/50" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400">Service Type</label>
              <select 
                className="flex h-10 w-full rounded-md border border-input bg-black/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.serviceType}
                onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
              >
                <option>2D Animation</option>
                <option>Character Design</option>
                <option>Illustration</option>
                <option>Custom Commission</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400">Project Details & Budget</label>
              <Textarea 
                placeholder="Tell me about your project, timeline, and estimated budget..." 
                className="bg-black/50" 
                rows={6} 
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Submit Request
            </Button>
          </form>
        </div>
      </FadeIn>
    </div>
  );
}
