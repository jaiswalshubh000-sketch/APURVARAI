import { FadeIn } from "@/src/components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera, FileSpreadsheet, Calendar, CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";

export function Recent() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors font-mono uppercase tracking-widest text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <FadeIn>
          <div className="mb-12">
            <span className="inline-block bg-primary text-black font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full mb-4">
              🎬 Current Project
            </span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
              Three-Film Production Management
            </h1>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-4 text-primary">Project Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                This project involved managing the production of three short fiction films — Nartaki, Bloom, and Mafia — simultaneously over a one-month timeline. Each film was handled by separate teams, requiring parallel coordination across multiple crews, locations, and production schedules. The complexity of handling multiple productions at once provided hands-on experience in real-time production management, resource allocation, and team coordination.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                  <div className="text-gray-500 font-mono text-xs uppercase mb-1">Project Type</div>
                  <div className="font-bold">Live-Action Film Production Management</div>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                  <div className="text-gray-500 font-mono text-xs uppercase mb-1">Projects Managed</div>
                  <div className="font-bold">Nartaki | Bloom | Mafia</div>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                  <div className="text-gray-500 font-mono text-xs uppercase mb-1">Duration</div>
                  <div className="font-bold">1 Month</div>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                  <div className="text-gray-500 font-mono text-xs uppercase mb-1">Team Size</div>
                  <div className="font-bold">3 Teams (5–7 members each)</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 1B. PRODUCTION FLOW DIAGRAM */}
        <FadeIn delay={0.1}>
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8">Production Flow</h2>
          <div className="flex flex-col items-center space-y-4 mb-16">
            {/* Phase 1 */}
            <div 
              className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => setExpandedPhase(expandedPhase === 1 ? null : 1)}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold uppercase text-white">Phase 1 — Pre-Production</h3>
                <span className="text-primary font-mono text-sm">{expandedPhase === 1 ? '−' : '+'}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Concept', 'Story', 'Screenplay', 'Script', 'Planning', 'Scheduling'].map((item, i, arr) => (
                  <div key={item} className="flex items-center">
                    <span className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-sm font-mono border border-white/10">{item}</span>
                    {i < arr.length - 1 && <span className="mx-2 text-gray-600">→</span>}
                  </div>
                ))}
              </div>
              {expandedPhase === 1 && (
                <div className="mt-4 pt-4 border-t border-white/10 text-gray-400 text-sm">
                  Coordinated initial concept development, script finalization, and scheduling across all three teams to ensure parallel progress without resource conflicts.
                </div>
              )}
            </div>

            <div className="text-primary">↓</div>

            {/* Phase 2 */}
            <div 
              className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => setExpandedPhase(expandedPhase === 2 ? null : 2)}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold uppercase text-white">Phase 2 — Production</h3>
                <span className="text-primary font-mono text-sm">{expandedPhase === 2 ? '−' : '+'}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Shoot Planning', 'Test Shots', 'Call Sheets', 'Execution', 'Daily Tracking'].map((item, i, arr) => (
                  <div key={item} className="flex items-center">
                    <span className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-sm font-mono border border-white/10">{item}</span>
                    {i < arr.length - 1 && <span className="mx-2 text-gray-600">→</span>}
                  </div>
                ))}
              </div>
              {expandedPhase === 2 && (
                <div className="mt-4 pt-4 border-t border-white/10 text-gray-400 text-sm">
                  Managed daily call sheets, equipment booking, location scouting, and on-set execution. Addressed real-time challenges like reshoots and location changes.
                </div>
              )}
            </div>

            <div className="text-primary">↓</div>

            {/* Phase 3 */}
            <div 
              className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => setExpandedPhase(expandedPhase === 3 ? null : 3)}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold uppercase text-white">Phase 3 — Post-Production</h3>
                <span className="text-primary font-mono text-sm">{expandedPhase === 3 ? '−' : '+'}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Editing', 'Sound', 'Colour Grading', 'Composition (For Nartaki)', 'Final Output (Screening)'].map((item, i, arr) => (
                  <div key={item} className="flex items-center">
                    <span className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-sm font-mono border border-white/10">{item}</span>
                    {i < arr.length - 1 && <span className="mx-2 text-gray-600">→</span>}
                  </div>
                ))}
              </div>
              {expandedPhase === 3 && (
                <div className="mt-4 pt-4 border-t border-white/10 text-gray-400 text-sm">
                  Oversaw editing timelines, sound design integration, and final color grading, culminating in a successful joint screening of all three films.
                </div>
              )}
            </div>
          </div>
        </FadeIn>

        {/* 1C. PARALLEL TIMELINE CHART */}
        <FadeIn delay={0.2}>
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8">Parallel Timeline (Mar 9 – Mar 23)</h2>
          <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 mb-16 overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="flex mb-4 border-b border-white/10 pb-2">
                <div className="w-32 font-bold text-gray-400 uppercase text-sm">Date</div>
                <div className="flex-1 grid grid-cols-3 gap-4 font-bold text-sm uppercase">
                  <div className="text-blue-400">Nartaki</div>
                  <div className="text-pink-400">Bloom</div>
                  <div className="text-purple-400">Mafia</div>
                </div>
              </div>
              
              {[
                { date: "Mar 9 (Mon)", tasks: ["Equipment in process", "Screenplay discussion", ""] },
                { date: "Mar 10 (Tue)", tasks: ["1st equipment batch booked", "Acting class", "Film grammar"] },
                { date: "Mar 11 (Wed)", tasks: ["Location mails", "Editing practicals", "Cinematography practicals"] },
                { date: "Mar 12 (Thu)", tasks: ["Pre-production meeting", "Actors for Diya finalized", "Location slip done"] },
                { date: "Mar 13 (Fri)", tasks: ["Diya's script done", "Udi script done", "Nia location & equip finalized"] },
                { date: "Mar 14 (Sat)", tasks: ["Shoot Day 1 (Scene 1, 2&4 failed)", "", ""] },
                { date: "Mar 15 (Sun)", tasks: ["Shoot Day 2 (Scenes 2,3,4,5)", "", ""] },
                { date: "Mar 16 (Mon)", tasks: ["", "Nia's Shoot", ""] },
                { date: "Mar 17 (Tue)", tasks: ["", "Nia's Shoot", "Udi's Shoot"] },
                { date: "Mar 18 (Wed)", tasks: ["", "", "Udi's Shoot"] },
                { date: "Mar 19 (Thu)", tasks: ["Diya reel uploaded", "All edits in progress", "All edits in progress"] },
                { date: "Mar 20 (Fri)", tasks: ["All rough cuts done", "All rough cuts done", "All rough cuts done"] },
                { date: "Mar 21 (Sat)", tasks: ["", "Nia poster done", "Udi poster done, sound started"] },
                { date: "Mar 22 (Sun)", tasks: ["Diya's sound started", "Nia's sound started", "Udi's sound finished"] },
                { date: "Mar 23 (Mon)", tasks: ["Diya's sound & composite done", "Nia's sound done", "Udi's sound done, Screening"] },
              ].map((row, i) => (
                <div key={i} className="flex py-3 border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <div className="w-32 text-sm font-mono text-gray-500 group-hover:text-white transition-colors">{row.date}</div>
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    <div className="text-sm text-blue-200/80 group-hover:text-blue-200 transition-colors">{row.tasks[0]}</div>
                    <div className="text-sm text-pink-200/80 group-hover:text-pink-200 transition-colors">{row.tasks[1]}</div>
                    <div className="text-sm text-purple-200/80 group-hover:text-purple-200 transition-colors">{row.tasks[2]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 1D. CALL SHEET SAMPLE */}
        <FadeIn delay={0.3}>
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8">Call Sheet Sample</h2>
          <div className="bg-white text-black rounded-xl overflow-hidden mb-16 shadow-2xl font-serif">
            <div className="bg-zinc-900 text-white p-6 border-b-4 border-primary">
              <h3 className="text-4xl font-bold uppercase tracking-widest mb-2 text-center">Call Sheet</h3>
              <div className="grid grid-cols-3 gap-4 text-sm font-mono mt-6 border-t border-white/20 pt-4">
                <div><span className="text-gray-400">Project:</span> NARTAKI</div>
                <div className="text-center"><span className="text-gray-400">Date:</span> 14th March</div>
                <div className="text-right"><span className="text-gray-400">Director:</span> Diya & Ananya</div>
              </div>
              <div className="text-center mt-4 font-mono text-primary font-bold">
                GENERAL CALL TIME: 9:00 AM
              </div>
            </div>
            <div className="p-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 uppercase text-xs tracking-wider">
                    <th className="p-3 border border-gray-300">Time</th>
                    <th className="p-3 border border-gray-300">Activity</th>
                    <th className="p-3 border border-gray-300">Scene</th>
                    <th className="p-3 border border-gray-300">Location</th>
                    <th className="p-3 border border-gray-300">Team</th>
                    <th className="p-3 border border-gray-300">Call Time</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-3 border border-gray-300 font-mono">11:00–13:30</td>
                    <td className="p-3 border border-gray-300 font-bold">Shoot for Scene 1</td>
                    <td className="p-3 border border-gray-300">Scene 1</td>
                    <td className="p-3 border border-gray-300">Audi Greenroom</td>
                    <td className="p-3 border border-gray-300">Whole Team</td>
                    <td className="p-3 border border-gray-300 font-mono">9:00</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="p-3 border border-gray-300 font-mono">18:00–20:00</td>
                    <td className="p-3 border border-gray-300 font-bold text-red-700">Shoot for Scene 2 & 4</td>
                    <td className="p-3 border border-gray-300 text-red-700">Scene 2&4 — Failed (Reshoot)</td>
                    <td className="p-3 border border-gray-300">VP Room</td>
                    <td className="p-3 border border-gray-300">Whole Team</td>
                    <td className="p-3 border border-gray-300 font-mono">—</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 p-4 bg-gray-100 border-l-4 border-primary text-sm italic">
                <strong>Note:</strong> Shoot Day 2 (15 March) — Scenes 2, 3, 4, 5 successfully completed at VP Room, 10:00–20:00
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 1E. TASK TRACKER MOCK */}
        <FadeIn delay={0.4}>
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8">Task Tracker</h2>
          <div className="bg-white rounded-xl overflow-hidden mb-16 shadow-2xl border border-gray-300 font-sans text-black">
            <div className="bg-gray-100 border-b border-gray-300 p-2 flex items-center gap-2 text-sm text-gray-600">
              <FileSpreadsheet className="w-4 h-4 text-green-600" />
              <span>Production_Tracker.xlsx</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-2 w-12 text-center text-gray-400 font-normal"></th>
                    <th className="border border-gray-300 p-2 text-center font-bold bg-gray-200">A (10th To-Do)</th>
                    <th className="border border-gray-300 p-2 text-center font-bold bg-gray-200">B (11th To-Do)</th>
                    <th className="border border-gray-300 p-2 text-center font-bold bg-gray-200">C (12th To-Do)</th>
                    <th className="border border-gray-300 p-2 text-center font-bold bg-gray-200">D (13th To-Do)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      { text: "Finalize and book equipment", done: true },
                      { text: "Equipment booking", done: false },
                      { text: "First draft of script", done: false },
                      { text: "Final script", done: true }
                    ],
                    [
                      { text: "Finalize location", done: false },
                      { text: "Finish editing practicals", done: true },
                      { text: "Pre-production meeting", done: true },
                      { text: "Final location and actors", done: true }
                    ],
                    [
                      { text: "Call the actors for class", done: true },
                      { text: "Cinematography practical", done: false },
                      { text: "Pitch deck update", done: false },
                      { text: "Finalize Nia location and equip", done: true }
                    ],
                    [
                      { text: "Remind mam what to tell", done: true },
                      { text: "First draft of scripts", done: false },
                      { text: "Finalize all equipment", done: true },
                      { text: "Production breakdown", done: false }
                    ],
                    [
                      { text: "Test shot of Udi", done: true },
                      { text: "Actors and location final (all)", done: false },
                      { text: "Actors for Diya", done: true },
                      { text: "Podium approval", done: true }
                    ],
                    [
                      { text: "Understand breakdown of scenes", done: false },
                      { text: "Prepare production day lists", done: false },
                      { text: "Location slip", done: true },
                      { text: "", done: false }
                    ],
                    [
                      { text: "", done: false },
                      { text: "Location mails", done: true },
                      { text: "", done: false },
                      { text: "", done: false }
                    ]
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="border border-gray-300 p-2 text-center text-gray-400 bg-gray-50">{i + 1}</td>
                      {row.map((cell, j) => (
                        <td key={j} className={`border border-gray-300 p-2 ${cell.done ? 'bg-green-100 text-green-800' : cell.text ? 'bg-white' : 'bg-gray-50'}`}>
                          {cell.text && (
                            <div className="flex items-center gap-2">
                              {cell.done ? <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> : <Circle className="w-4 h-4 text-gray-300 shrink-0" />}
                              <span>{cell.text}</span>
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* 1F. EXCEL DOCUMENTATION GALLERY */}
        <FadeIn delay={0.5}>
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8">Production Documentation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { label: "Call Sheet", icon: Calendar },
              { label: "Production Schedule", icon: Calendar },
              { label: "Task Tracker", icon: FileSpreadsheet },
              { label: "Timeline Overview", icon: FileSpreadsheet }
            ].map((doc, i) => (
              <a 
                key={i}
                href="https://drive.google.com/drive/folders/1uSCdCP9pOR0kXMaE_w9hRjv_XO1tXeB-?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:bg-white/5 transition-all group flex flex-col items-center justify-center aspect-video text-center"
              >
                <doc.icon className="w-12 h-12 text-gray-500 group-hover:text-primary mb-4 transition-colors" />
                <span className="text-white font-bold uppercase tracking-wider">{doc.label}</span>
                <span className="text-xs text-gray-500 mt-2 font-mono">View in Drive ↗</span>
              </a>
            ))}
          </div>
          <div className="text-center mb-16">
            <a 
              href="https://drive.google.com/drive/folders/1uSCdCP9pOR0kXMaE_w9hRjv_XO1tXeB-?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              View All Production Docs →
            </a>
          </div>
        </FadeIn>

        {/* 1G. BEHIND-THE-SCENES IMAGE GRID */}
        <FadeIn delay={0.6}>
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">Set / Behind-the-Scenes — Nartaki, Bloom & Mafia</h2>
          <p className="text-gray-400 mb-8 font-mono">Production stills from the shoot — images to be added.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-zinc-900 border border-white/10 rounded-xl aspect-square flex flex-col items-center justify-center text-gray-500 hover:border-white/30 transition-colors">
                <Camera className="w-12 h-12 mb-4 opacity-50" />
                <span className="font-mono text-sm uppercase tracking-widest">Add Image</span>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
