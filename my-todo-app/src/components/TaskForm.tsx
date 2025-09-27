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
    console.log('Form submitted:', { title: title.trim(), description: description.trim(), priority });
    
    if (!title.trim()) {
      console.log('Title is empty, aborting');
      return;
    }
    
    // Generate UUID compatible with all browsers including older Safari
    const generateId = () => {
      return 'task-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    };
    
    const newTask = {
      id: generateId(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
      priority,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    console.log('Creating new task:', newTask);
    onAdd(newTask);
    
    setTitle('');
    setDescription('');
    setPriority('medium');
    console.log('Form reset completed');
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Button clicked, submitting form...');
    const form = e.currentTarget.closest('form');
    if (form) {
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="glass-effect rounded-2xl p-6 backdrop-blur-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 text-lg font-medium touch-manipulation"
              type="text"
              placeholder="✨ 今日は何をしますか？"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              autoComplete="off"
              autoFocus={false}
              style={{WebkitTapHighlightColor: 'transparent'}}
            />
          </div>
          
          <textarea
            className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 resize-none touch-manipulation"
            placeholder="📝 詳細な説明があれば入力してください（任意）"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={2}
            autoComplete="off"
            style={{WebkitTapHighlightColor: 'transparent'}}
          />
          
          <div className="flex gap-4">
            <div className="relative flex-1">
              <select
                className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white focus:outline-none focus:border-white/50 appearance-none cursor-pointer touch-manipulation"
                value={priority}
                onChange={e => setPriority(e.target.value as any)}
                style={{WebkitTapHighlightColor: 'transparent'}}
              >
                <option value="low" className="text-gray-800 bg-white">🟢 低い優先度</option>
                <option value="medium" className="text-gray-800 bg-white">🟡 普通の優先度</option>
                <option value="high" className="text-gray-800 bg-white">🔴 高い優先度</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <button 
              type="submit" 
              onClick={handleButtonClick}
              className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700 text-white font-semibold rounded-2xl transition-colors duration-200 flex items-center gap-2 whitespace-nowrap touch-manipulation"
              style={{WebkitTapHighlightColor: 'transparent'}}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              タスクを追加
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
