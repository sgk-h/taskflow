import React from 'react';
import type { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('このタスクを削除しますか？')) {
      onDelete(task.id);
    }
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${
      task.completed ? 'opacity-75' : ''
    }`}>
      <div className="glass-effect p-6 backdrop-blur-2xl border border-white/20 hover:border-white/40">
        {/* Priority indicator line */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${
          task.priority === 'high' ? 'bg-gradient-to-r from-red-400 to-pink-400' : 
          task.priority === 'medium' ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 
          'bg-gradient-to-r from-green-400 to-emerald-400'
        }`}></div>
        
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4 flex-1">
            {/* Custom Checkbox */}
            <div className="relative mt-1">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="sr-only"
              />
              <div 
                onClick={() => onToggle(task.id)}
                className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
                  task.completed 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-400 neon-glow' 
                    : 'border-white/40 hover:border-white/60'
                }`}
              >
                {task.completed && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            
            {/* Task Content */}
            <div className="flex-1 min-w-0">
              <div className={`text-white font-semibold text-lg leading-tight transition-all duration-300 ${
                task.completed ? 'line-through opacity-70' : ''
              }`}>
                {task.title}
              </div>
              
              {task.description && (
                <div className="text-white/70 text-sm mt-2 leading-relaxed">
                  {task.description}
                </div>
              )}
              
              {/* Priority & Date */}
              <div className="flex items-center gap-3 mt-4">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${
                  task.priority === 'high' 
                    ? 'bg-red-500/20 text-red-200 border-red-400/30' : 
                  task.priority === 'medium' 
                    ? 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30' : 
                    'bg-green-500/20 text-green-200 border-green-400/30'
                }`}>
                  <span>{task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢'}</span>
                  {task.priority === 'high' ? '高い優先度' : 
                   task.priority === 'medium' ? '普通の優先度' : '低い優先度'}
                </span>
                
                {task.createdAt && (
                  <span className="text-white/50 text-xs">
                    {new Date(task.createdAt).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {/* Delete Button - Now Always Visible */}
          <div className="flex flex-col gap-2 ml-4">
            <button 
              onClick={handleDelete} 
              className="p-3 text-red-300 hover:text-red-200 hover:bg-red-500/20 rounded-xl transition-all duration-300 hover:scale-110 border border-red-400/30 hover:border-red-400/50"
              title="タスクを削除"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            <span className="text-xs text-white/50 text-center">削除</span>
          </div>
        </div>
      </div>
    </div>
  );
};
