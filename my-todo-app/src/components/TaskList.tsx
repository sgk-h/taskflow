import React from 'react';
import type { Task } from '../types/task';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => (
  <div className="mt-6">
    {tasks.length === 0 ? (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🌟</div>
        <div className="text-white/70 text-lg">No tasks yet. Add one above to get started!</div>
      </div>
    ) : (
      <div className="space-y-3">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </div>
    )}
  </div>
);
