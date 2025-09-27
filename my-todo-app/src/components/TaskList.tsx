import React from 'react';
import type { Task } from '../types/task';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => (
  <div className="space-y-4">
    {tasks.length === 0 ? (
      <div className="text-center py-20">
        <div className="floating-animation">
          <div className="text-8xl mb-6">🌟</div>
        </div>
        <div className="text-white/80 text-xl font-medium mb-4">
          タスクリストが空です
        </div>
        <div className="text-white/60 text-lg max-w-md mx-auto leading-relaxed">
          今日も頑張りましょう！上のフォームから最初のタスクを追加して、効率よく作業を進めましょう。
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex space-x-3">
            <div className="w-3 h-3 bg-purple-400/60 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-pink-400/60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-blue-400/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    ) : (
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div 
            key={task.id} 
            className="animate-fade-in-up"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} />
          </div>
        ))}
      </div>
    )}
  </div>
);
