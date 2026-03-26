import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { ChevronDown, ChevronUp, FileSpreadsheet, Camera, ExternalLink } from "lucide-react";

export function RecentProjects() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <FadeIn>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white">Recent Projects</h2>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 relative overflow-hidden">
          {/* Badge */}
          <div className="absolute top-6 right-6 bg-primary text-black font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider shadow-lg">
            🎬 Current Project
          </div>

          {/* 1A. PROJECT OVERVIEW CARD */}
          <div className="mb-16 mt-8 md:mt-0">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
              Three-Film Production Management
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-4xl">
              This project involved managing the production of three short fiction films — Nartaki, Bloom, and Mafia — simultaneously over a one-month timeline. Each film was handled by separate teams, requiring parallel coordination across multiple crews, locations, and production schedules. The project focused on ensuring smooth execution across all three productions while maintaining timelines, managing resources, and resolving on-ground challenges. The complexity of handling multiple productions at once provided hands-on experience in real-time production management and team coordination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-black/40 border border-white/10 rounded-xl p-5">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Project Type</p>
                <p className="text-white font-medium">Live-Action Film Production Management</p>
              </div>
              <div className="bg-black/40 border border-white/10 rounded-xl p-5">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Projects Managed</p>
                <p className="text-white font-medium">Nartaki | Bloom | Mafia</p>
              </div>
              <div className="bg-black/40 border border-white/10 rounded-xl p-5">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Duration</p>
                <p className="text-white font-medium">1 Month</p>
              </div>
              <div className="bg-black/40 border border-white/10 rounded-xl p-5">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Team Size</p>
                <p className="text-white font-medium">3 Teams (5–7 members each)</p>
              </div>
            </div>
          </div>

          {/* 1B. PRODUCTION FLOW DIAGRAM */}
          <div className="mb-20">
            <h4 className="text-xl font-bold text-white mb-8 uppercase tracking-wider border-b border-white/10 pb-4">Production Flow</h4>
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <FlowPhase 
                title="Phase 1 — Pre-Production"
                color="bg-blue-500/20 border-blue-500/50"
                textColor="text-blue-400"
                items={["Concept", "Story", "Screenplay", "Script", "Planning", "Scheduling"]}
                description="Initial conceptualization and planning across all three films to ensure solid foundations before shooting."
              />
              <div className="h-8 w-px bg-white/20 my-2"></div>
              <div className="text-white/40 mb-2">↓</div>
              
              <FlowPhase 
                title="Phase 2 — Production"
                color="bg-amber-500/20 border-amber-500/50"
                textColor="text-amber-400"
                items={["Shoot Planning", "Test Shots", "Call Sheets", "Execution", "Daily Tracking"]}
                description="Active shooting phase managing multiple crews, locations, and daily schedules simultaneously."
              />
              <div className="h-8 w-px bg-white/20 my-2"></div>
              <div className="text-white/40 mb-2">↓</div>
              
              <FlowPhase 
                title="Phase 3 — Post-Production"
                color="bg-emerald-500/20 border-emerald-500/50"
                textColor="text-emerald-400"
                items={["Editing", "Sound", "Colour Grading", "Composition (For Nartaki)", "Final Output (Screening)"]}
                description="Final assembly, polishing, and delivery of the three completed short films for screening."
              />
            </div>
          </div>

          {/* 1C. PARALLEL TIMELINE CHART */}
          <div className="mb-20">
            <h4 className="text-xl font-bold text-white mb-8 uppercase tracking-wider border-b border-white/10 pb-4">Timeline</h4>
            <div className="overflow-x-auto pb-6">
              <div className="min-w-[900px]">
                {/* Timeline Header */}
                <div className="flex border-b border-white/10 pb-2 mb-4">
                  <div className="w-32 font-mono text-sm text-gray-500 shrink-0">Track</div>
                  <div className="flex-1 flex justify-between font-mono text-xs text-gray-500 px-2">
                    <span>Mar 9</span>
                    <span>Mar 12</span>
                    <span>Mar 16</span>
                    <span>Mar 19</span>
                    <span>Mar 23</span>
                  </div>
                </div>
                
                {/* Tracks */}
                <div className="space-y-6">
                  <TimelineTrack 
                    name="Nartaki" 
                    color="bg-purple-500" 
                    events={[
                      { day: 0, length: 3, label: "Pre-prod", desc: "Mar 9-11: Screenplay, acting class, practicals" },
                      { day: 3, length: 2, label: "Prep", desc: "Mar 12-13: Pre-prod meeting, script done" },
                      { day: 5, length: 2, label: "Shoot", desc: "Mar 14-15: Shoot Day 1 & 2" },
                      { day: 10, length: 4, label: "Post", desc: "Mar 19-23: Edits, rough cuts, composite, screening" }
                    ]}
                  />
                  <TimelineTrack 
                    name="Bloom (Diya)" 
                    color="bg-pink-500" 
                    events={[
                      { day: 3, length: 2, label: "Prep", desc: "Mar 12-13: Actors finalized, script done, location/equip done" },
                      { day: 10, length: 2, label: "Edit", desc: "Mar 19-20: Reel uploaded, rough cuts" },
                      { day: 13, length: 2, label: "Sound", desc: "Mar 22-23: Sound started & finished" }
                    ]}
                  />
                  <TimelineTrack 
                    name="Mafia (Udi/Nia)" 
                    color="bg-orange-500" 
                    events={[
                      { day: 4, length: 1, label: "Prep", desc: "Mar 13: Udi script done, Nia location/equip finalized" },
                      { day: 7, length: 3, label: "Shoot", desc: "Mar 16-18: Nia's & Udi's Shoots" },
                      { day: 10, length: 2, label: "Edit", desc: "Mar 19-20: Edits in progress, rough cuts" },
                      { day: 12, length: 3, label: "Post", desc: "Mar 21-23: Posters, sound design & screening" }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 1D. CALL SHEET SAMPLE */}
          <div className="mb-20">
            <h4 className="text-xl font-bold text-white mb-8 uppercase tracking-wider border-b border-white/10 pb-4">Production Call Sheet</h4>
            <div className="bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <div className="bg-black p-6 border-b border-white/20 flex justify-between items-end">
                <div>
                  <h5 className="text-3xl font-serif text-white uppercase tracking-widest mb-2">Call Sheet</h5>
                  <p className="text-gray-400 font-mono text-sm">PROJECT: NARTAKI</p>
                </div>
                <div className="text-right font-mono text-sm">
                  <p className="text-white mb-1">DATE: 14th March</p>
                  <p className="text-gray-400 mb-1">DIRECTOR: Diya & Ananya</p>
                  <p className="text-primary font-bold">GENERAL CALL TIME: 9:00 AM</p>
                </div>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-left border-collapse font-mono text-sm">
                  <thead>
                    <tr className="bg-white/5 text-gray-300">
                      <th className="p-4 border-b border-white/10 font-medium">Time</th>
                      <th className="p-4 border-b border-white/10 font-medium">Activity</th>
                      <th className="p-4 border-b border-white/10 font-medium">Scene</th>
                      <th className="p-4 border-b border-white/10 font-medium">Location</th>
                      <th className="p-4 border-b border-white/10 font-medium">Team</th>
                      <th className="p-4 border-b border-white/10 font-medium">Call Time</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4">11:00–13:30</td>
                      <td className="p-4 text-white">Shoot for Scene 1</td>
                      <td className="p-4">Scene 1</td>
                      <td className="p-4">Audi Greenroom</td>
                      <td className="p-4">Whole Team</td>
                      <td className="p-4 text-white">9:00</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4">18:00–20:00</td>
                      <td className="p-4 text-white">Shoot for Scene 2 & 4</td>
                      <td className="p-4 text-red-400">Scene 2&4 — Failed (Reshoot)</td>
                      <td className="p-4">VP Room</td>
                      <td className="p-4">Whole Team</td>
                      <td className="p-4 text-gray-500">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-white/5 p-4 border-t border-white/10 text-center">
                <p className="text-gray-400 font-mono text-xs uppercase tracking-wider">
                  Note: Shoot Day 2 (15 March) — Scenes 2, 3, 4, 5 successfully completed at VP Room, 10:00–20:00
                </p>
              </div>
            </div>
          </div>

          {/* 1E. TASK TRACKER MOCK */}
          <div className="mb-20">
            <h4 className="text-xl font-bold text-white mb-8 uppercase tracking-wider border-b border-white/10 pb-4">Daily Task Tracker</h4>
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-xl max-w-5xl mx-auto font-sans text-sm">
              <div className="bg-gray-100 border-b border-gray-300 p-2 flex items-center gap-2 text-gray-600">
                <FileSpreadsheet size={16} className="text-green-600" />
                <span className="font-medium">Production_Tracker_Mar10-13.xlsx</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600 border-b border-gray-300">
                      <th className="border-r border-gray-300 p-2 w-10 text-center font-normal bg-gray-100"></th>
                      <th className="border-r border-gray-300 p-3 font-semibold text-left w-1/4">10th To-Do</th>
                      <th className="border-r border-gray-300 p-3 font-semibold text-left w-1/4">11th To-Do</th>
                      <th className="border-r border-gray-300 p-3 font-semibold text-left w-1/4">12th To-Do</th>
                      <th className="p-3 font-semibold text-left w-1/4">13th To-Do</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {[0, 1, 2, 3, 4, 5, 6].map((rowIndex) => {
                      const col1 = [
                        { text: "Finalize and book equipment", done: true },
                        { text: "Finalize location", done: false },
                        { text: "Call the actors for class", done: true },
                        { text: "Remind mam what to tell", done: true },
                        { text: "Test shot of Udi", done: true },
                        { text: "Understand breakdown of scenes", done: false },
                        null
                      ][rowIndex];
                      
                      const col2 = [
                        { text: "Equipment booking", done: false },
                        { text: "Finish editing practicals", done: true },
                        { text: "Cinematography practical", done: false },
                        { text: "First draft of scripts", done: false },
                        { text: "Actors and location final (all)", done: false },
                        { text: "Prepare production day lists", done: false },
                        { text: "Location mails", done: true }
                      ][rowIndex];

                      const col3 = [
                        { text: "First draft of script", done: false },
                        { text: "Pre-production meeting", done: true },
                        { text: "Pitch deck update", done: false },
                        { text: "Finalize all equipment", done: true },
                        { text: "Actors for Diya", done: true },
                        { text: "Location slip", done: true },
                        null
                      ][rowIndex];

                      const col4 = [
                        { text: "Final script", done: true },
                        { text: "Final location and actors", done: true },
                        { text: "Finalize Nia location and equip", done: true },
                        { text: "Production breakdown", done: false },
                        { text: "Podium approval", done: true },
                        null,
                        null
                      ][rowIndex];

                      return (
                        <tr key={rowIndex} className="border-b border-gray-200">
                          <td className="border-r border-gray-300 p-2 text-center text-gray-400 bg-gray-50">{rowIndex + 1}</td>
                          <TrackerCell data={col1} />
                          <TrackerCell data={col2} />
                          <TrackerCell data={col3} />
                          <TrackerCell data={col4} />
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 1F. EXCEL DOCUMENTATION GALLERY */}
          <div className="mb-20">
            <h4 className="text-xl font-bold text-white mb-8 uppercase tracking-wider border-b border-white/10 pb-4">Production Documentation</h4>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {["Call Sheet", "Production Schedule", "Task Tracker", "Timeline Overview", "Equipment List", "Location Recce"].map((label, i) => (
                <a 
                  key={i}
                  href="https://drive.google.com/drive/folders/1uSCdCP9pOR0kXMaE_w9hRjv_XO1tXeB-?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative aspect-video bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col items-center justify-center"
                >
                  <FileSpreadsheet size={32} className="text-white/20 group-hover:text-primary transition-colors mb-3" />
                  <span className="text-white/80 font-mono text-sm uppercase tracking-wider text-center px-4">{label}</span>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="https://drive.google.com/drive/folders/1uSCdCP9pOR0kXMaE_w9hRjv_XO1tXeB-?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-mono text-sm uppercase tracking-wider transition-colors"
              >
                View All Production Docs <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* 1G. BEHIND-THE-SCENES IMAGE GRID */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-white/10 pb-4">Set / Behind-the-Scenes — Nartaki, Bloom & Mafia</h4>
            <p className="text-gray-400 text-sm font-mono mb-8 uppercase tracking-wider">Production stills from the shoot — images to be added.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[4/3] bg-black/40 border border-white/10 border-dashed rounded-xl flex flex-col items-center justify-center text-white/20 hover:text-white/40 hover:border-white/30 transition-colors cursor-pointer">
                  <Camera size={48} className="mb-4" />
                  <span className="font-mono text-sm uppercase tracking-wider">Add Image</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}

function FlowPhase({ title, color, textColor, items, description }: { title: string, color: string, textColor: string, items: string[], description: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`w-full border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/5 ${color}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center mb-4">
        <h5 className={`text-lg font-bold uppercase tracking-wider ${textColor}`}>{title}</h5>
        {isOpen ? <ChevronUp className={textColor} /> : <ChevronDown className={textColor} />}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-2">
        {items.map((item, i) => (
          <span key={i} className="px-3 py-1 bg-black/40 rounded-full text-xs font-mono text-white/80 border border-white/10">
            {item}
          </span>
        ))}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-300 text-sm mt-4 pt-4 border-t border-white/10">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TimelineTrack({ name, color, events }: { name: string, color: string, events: {day: number, length: number, label: string, desc: string}[] }) {
  return (
    <div className="flex items-center group">
      <div className="w-32 font-bold text-white text-sm shrink-0">{name}</div>
      <div className="flex-1 relative h-10 bg-white/5 rounded-md overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 flex justify-between px-2">
          {[0,1,2,3,4].map(i => <div key={i} className="w-px h-full bg-white/5" />)}
        </div>
        
        {/* Events */}
        {events.map((ev, i) => (
          <div 
            key={i}
            className={`absolute top-1.5 bottom-1.5 rounded-md ${color} flex items-center justify-center text-xs font-bold text-white/90 shadow-lg cursor-help group/tooltip`}
            style={{ 
              left: `${(ev.day / 14) * 100}%`, 
              width: `${(ev.length / 14) * 100}%`,
              minWidth: '40px'
            }}
          >
            <span className="truncate px-2">{ev.label}</span>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-black border border-white/20 text-white text-xs p-2 rounded shadow-xl opacity-0 group-hover/tooltip:opacity-100 pointer-events-none z-10 transition-opacity">
              {ev.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrackerCell({ data }: { data: { text: string, done: boolean } | null }) {
  if (!data) return <td className="border-r border-gray-300 p-3 bg-white"></td>;
  
  return (
    <td className={`border-r border-gray-300 p-3 ${data.done ? 'bg-green-100/50' : 'bg-white'}`}>
      <div className="flex items-start gap-2">
        <div className={`mt-0.5 w-3 h-3 rounded-sm border shrink-0 ${data.done ? 'bg-green-500 border-green-600' : 'border-gray-300'}`} />
        <span className={data.done ? 'text-gray-700' : 'text-gray-600'}>{data.text}</span>
      </div>
    </td>
  );
}
