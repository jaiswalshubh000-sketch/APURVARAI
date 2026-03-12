import { motion } from "framer-motion";

interface Task {
  name: string;
  startWeek: number;
  durationWeeks: number;
}

export function ProjectGantt({ tasks, totalWeeks }: { tasks: Task[], totalWeeks: number }) {
  return (
    <div className="w-full overflow-x-auto bg-white/5 border border-white/10 rounded-xl p-6 mt-8">
      <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Gantt Chart Timeline</h4>
      <div className="min-w-[600px]">
        {/* Header */}
        <div className="flex border-b border-white/10 pb-2 mb-4">
          <div className="w-1/3 font-mono text-sm text-gray-500">Task</div>
          <div className="w-2/3 flex">
            {Array.from({ length: totalWeeks }).map((_, i) => (
              <div key={i} className="flex-1 text-center font-mono text-sm text-gray-500">W{i + 1}</div>
            ))}
          </div>
        </div>
        {/* Tasks */}
        <div className="space-y-4">
          {tasks.map((task, i) => (
            <div key={i} className="flex items-center">
              <div className="w-1/3 text-sm text-gray-300 pr-4">{task.name}</div>
              <div className="w-2/3 flex relative h-8 bg-black/20 rounded-md overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(task.durationWeeks / totalWeeks) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="absolute h-full bg-primary/80 rounded-md border border-primary flex items-center justify-center"
                  style={{ left: `${(task.startWeek / totalWeeks) * 100}%` }}
                >
                  <span className="text-[10px] font-bold text-black px-2 truncate">
                    {task.durationWeeks * 7} Days
                  </span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
