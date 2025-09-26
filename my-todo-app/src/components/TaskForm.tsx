import React, { useState } from 'react';
import type { Task } from '../types/task';

interface TaskFormProps {
  onAdd: (task: Task) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      priority,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    setTitle('');
    setDescription('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col gap-4">
        <input
          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <div className="flex gap-3">
          <select
            className="px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            value={priority}
            onChange={e => setPriority(e.target.value as any)}
          >
            <option value="low" className="text-gray-800">🟢 Low</option>
            <option value="medium" className="text-gray-800">🟡 Medium</option>
            <option value="high" className="text-gray-800">🔴 High</option>
          </select>
          <button 
            type="submit" 
            className="flex-1 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-xl border border-white/30 transition-all duration-200 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
          >
            ✨ Add Task
          </button>
        </div>
      </div>
    </form>
  );
};
