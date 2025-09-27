import React from 'react';
import type { TaskFilter } from '../types/task';

interface FilterBarProps {
  filter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => (
  <div className="flex justify-center gap-4 mb-8">
    <div className="glass-effect rounded-2xl p-2 backdrop-blur-2xl">
      <div className="flex gap-2">
        <button
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
            filter === 'all' 
              ? 'bg-white text-purple-600 shadow-lg neon-glow transform scale-105' 
              : 'text-white hover:bg-white/20 hover:scale-105'
          }`}
          onClick={() => setFilter('all')}
        >
          <span className="text-lg">🌟</span>
          <span>すべて</span>
        </button>
        <button
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
            filter === 'incomplete' 
              ? 'bg-white text-purple-600 shadow-lg neon-glow transform scale-105' 
              : 'text-white hover:bg-white/20 hover:scale-105'
          }`}
          onClick={() => setFilter('incomplete')}
        >
          <span className="text-lg">⚡</span>
          <span>進行中</span>
        </button>
        <button
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
            filter === 'completed' 
              ? 'bg-white text-purple-600 shadow-lg neon-glow transform scale-105' 
              : 'text-white hover:bg-white/20 hover:scale-105'
          }`}
          onClick={() => setFilter('completed')}
        >
          <span className="text-lg">✅</span>
          <span>完了</span>
        </button>
      </div>
    </div>
  </div>
);
