import { motion } from "framer-motion";

interface Task {
  name: string;
  startWeek: number;
  durationWeeks: number;
}

export function MiniGantt({ tasks, totalWeeks }: { tasks: Task[], totalWeeks: number }) {
  return (
    <div className="w-full mt-4 bg-black/20 rounded-lg p-3 border border-white/5">
      <div className="flex justify-between text-[10px] text-gray-500 font-mono mb-2 uppercase tracking-widest border-b border-white/10 pb-1">
        <span>Timeline</span>
        <span>{totalWeeks} Weeks</span>
      </div>
      <div className="space-y-1.5 relative">
        {/* Grid lines */}
        <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
          {Array.from({ length: totalWeeks + 1 }).map((_, i) => (
            <div key={i} className="h-full border-l border-white/20" />
          ))}
        </div>
        
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center h-4 relative">
            <div className="w-full h-full bg-white/5 rounded-sm overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(task.durationWeeks / totalWeeks) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="absolute h-full bg-primary/60 border border-primary/80 rounded-sm"
                style={{ left: `${(task.startWeek / totalWeeks) * 100}%` }}
              />
            </div>
            <span className="absolute left-0 text-[9px] font-mono text-white/80 px-1 truncate max-w-full drop-shadow-md mix-blend-difference">
              {task.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
