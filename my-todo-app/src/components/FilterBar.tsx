import React from 'react';
import type { TaskFilter } from '../types/task';

interface FilterBarProps {
  filter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => (
  <div className="flex justify-center gap-2 mb-6">
    <button
      className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
        filter === 'all' 
          ? 'bg-white text-purple-600 shadow-lg' 
          : 'bg-white/20 text-white hover:bg-white/30'
      }`}
      onClick={() => setFilter('all')}
    >
      🌟 All
    </button>
    <button
      className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
        filter === 'incomplete' 
          ? 'bg-white text-purple-600 shadow-lg' 
          : 'bg-white/20 text-white hover:bg-white/30'
      }`}
      onClick={() => setFilter('incomplete')}
    >
      ⏳ Active
    </button>
    <button
      className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
        filter === 'completed' 
          ? 'bg-white text-purple-600 shadow-lg' 
          : 'bg-white/20 text-white hover:bg-white/30'
      }`}
      onClick={() => setFilter('completed')}
    >
      ✅ Done
    </button>
  </div>
);
