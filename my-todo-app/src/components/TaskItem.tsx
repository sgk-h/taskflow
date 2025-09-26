import React from 'react';
import type { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
  <div className={`group p-4 mb-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl transition-all duration-200 hover:bg-white/20 hover:scale-[1.02] ${task.completed ? 'opacity-60' : ''}`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 rounded-full border-2 border-white/50 text-white focus:ring-white/30"
        />
        <div className="flex-1">
          <div className={`text-white font-medium ${task.completed ? 'line-through' : ''}`}>
            {task.title}
          </div>
          {task.description && (
            <div className="text-white/70 text-sm mt-1">{task.description}</div>
          )}
          <div className="flex items-center gap-2 mt-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              task.priority === 'high' ? 'bg-red-500/20 text-red-200 border border-red-400/30' : 
              task.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-200 border border-yellow-400/30' : 
              'bg-green-500/20 text-green-200 border border-green-400/30'
            }`}>
              {task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢'} {task.priority}
            </span>
          </div>
        </div>
      </div>
      <button 
        onClick={() => onDelete(task.id)} 
        className="opacity-0 group-hover:opacity-100 ml-4 p-2 text-red-300 hover:text-red-200 hover:bg-red-500/20 rounded-lg transition-all duration-200"
      >
        🗑️
      </button>
    </div>
  </div>
);
