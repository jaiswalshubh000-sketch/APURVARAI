import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { ProjectSection } from "@/src/components/ProjectSection";
import { ImageGallery } from "@/src/components/ImageGallery";

export function EmbroideryStall() {
  const images = [
    "https://drive.google.com/thumbnail?id=191jUp6x9GMYpNDX7xisOB2oW8yhH78H5&sz=w1920",
    "https://drive.google.com/thumbnail?id=19tx5KSpMe4rU4WdYbXiuwnOIzJYhHnoO&sz=w1920",
    "https://drive.google.com/thumbnail?id=1GG32UTQoLf_GurPBRtIYdyv7y8TScCnA&sz=w1920",
    "https://drive.google.com/thumbnail?id=1IwHJdfJ51G1dFD6YEnp1TWdx1ZB3m5ng&sz=w1920",
    "https://drive.google.com/thumbnail?id=1SL62PqDKlS2wNb1AeyJawbCGSi4dCu44&sz=w1920",
    "https://drive.google.com/thumbnail?id=1n3F141DRWGcPLLRgPBdFhqFW4hOsUefs&sz=w1920"
  ];

  return (
    <ProjectLayout
      subtitle="Creative Production"
      title="EMBROIDERY STALL"
      tagline="A visual exploration of traditional crafts through modern media."
    >
      <ProjectSection title="Project Overview">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            This project focuses on capturing the intricate details and vibrant colors of a traditional embroidery stall. Through careful art direction and visual storytelling, the essence of the craft is brought to life.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Project Scope">
        <ScopeGrid
          items={[
            { label: "Goal", value: "Showcase traditional embroidery" },
            { label: "Focus", value: "Visual storytelling and art direction" },
            { label: "Techniques", value: "Photography, Editing" },
            { label: "Medium", value: "Digital Media" },
            { label: "Outcome", value: "A curated collection of visuals" },
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Supporting Sub-Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center border border-white/5 overflow-hidden">
              <img src="https://drive.google.com/thumbnail?id=19tx5KSpMe4rU4WdYbXiuwnOIzJYhHnoO&sz=w1920" alt="Thread Sourcing" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-white">Thread Sourcing</h3>
            <p className="text-gray-400 text-sm font-mono">Documenting the procurement of raw materials and color matching processes.</p>
          </div>
          <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center border border-white/5 overflow-hidden">
              <img src="https://drive.google.com/thumbnail?id=1GG32UTQoLf_GurPBRtIYdyv7y8TScCnA&sz=w1920" alt="Pattern Design" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-white">Pattern Design</h3>
            <p className="text-gray-400 text-sm font-mono">Translating traditional motifs into digital blueprints for modern production.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-white">Production Inventory</h3>
        <div className="bg-white rounded-xl overflow-hidden mb-16 shadow-2xl border border-gray-300 font-sans text-black">
          <div className="bg-gray-100 border-b border-gray-300 p-2 flex items-center gap-2 text-sm text-gray-600">
            <span className="font-bold text-green-700">X</span>
            <span>Inventory_Tracking.xlsx</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-2 text-left font-bold bg-gray-200">Item ID</th>
                  <th className="border border-gray-300 p-2 text-left font-bold bg-gray-200">Material</th>
                  <th className="border border-gray-300 p-2 text-left font-bold bg-gray-200">Color Code</th>
                  <th className="border border-gray-300 p-2 text-right font-bold bg-gray-200">Quantity (Spools)</th>
                  <th className="border border-gray-300 p-2 text-center font-bold bg-gray-200">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "THR-001", mat: "Silk", color: "#FF0000 (Crimson)", qty: 150, status: "In Stock" },
                  { id: "THR-002", mat: "Cotton", color: "#0000FF (Navy)", qty: 45, status: "Low Stock" },
                  { id: "THR-003", mat: "Metallic", color: "#FFD700 (Gold)", qty: 200, status: "In Stock" },
                  { id: "FAB-012", mat: "Linen Base", color: "Natural", qty: 12, status: "Reorder" },
                  { id: "NDL-005", mat: "Steel Needles", color: "N/A", qty: 500, status: "In Stock" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-2 font-mono text-gray-600">{row.id}</td>
                    <td className="border border-gray-300 p-2">{row.mat}</td>
                    <td className="border border-gray-300 p-2">{row.color}</td>
                    <td className="border border-gray-300 p-2 text-right font-mono">{row.qty}</td>
                    <td className="border border-gray-300 p-2 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${row.status === 'In Stock' ? 'bg-green-100 text-green-800' : row.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3C. Outgo Sub-project */}
        <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-4xl font-black uppercase tracking-tighter text-white">Outgo</h3>
              <span className="bg-primary/20 text-primary border border-primary/50 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest">
                Not a typical data project
              </span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Outgo represents the final phase of the embroidery lifecycle—the transition from crafted object to cultural artifact. It explores how traditional pieces move through modern markets and find new contexts.
                </p>
                <p className="text-gray-400 font-mono text-sm border-l-2 border-primary pl-4">
                  This phase isn't tracked in spreadsheets; it's tracked in stories, visual documentation, and the emotional resonance of the final piece leaving the stall.
                </p>
              </div>
              
              <div className="aspect-video bg-black/80 rounded-xl border border-white/20 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://drive.google.com/thumbnail?id=1SL62PqDKlS2wNb1AeyJawbCGSi4dCu44&sz=w1920')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" referrerPolicy="no-referrer"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center mb-4 backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <span className="text-white font-mono text-sm uppercase tracking-widest">Play Documentary Short</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Gallery">
        <ImageGallery images={images} />
      </ProjectSection>
    </ProjectLayout>
  );
}
