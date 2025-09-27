
import { useState } from 'react';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { FilterBar } from './components/FilterBar';
import { useTasks } from './hooks/useTasks';
import type { Task, TaskFilter } from './types/task';

function App() {
  const { tasks, addTask, deleteTask, toggleComplete } = useTasks();
  const [filter, setFilter] = useState<TaskFilter>('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <div className="glass-card card-hover rounded-3xl p-8 shadow-2xl backdrop-blur-3xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white/90 mb-2 text-shadow">新しいタスクを作成</h2>
            <TaskForm onAdd={addTask} />
          </div>
          
          <div className="mb-6">
            <FilterBar filter={filter} setFilter={setFilter} />
          </div>
          
          <div className="min-h-[200px]">
            <h3 className="text-xl font-semibold text-white/90 mb-4 text-shadow">
              {filter === 'all' ? 'すべてのタスク' : 
               filter === 'completed' ? '完了したタスク' : '進行中のタスク'}
            </h3>
            <TaskList tasks={filteredTasks} onToggle={toggleComplete} onDelete={deleteTask} />
          </div>
          
          {/* Stats Section */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex justify-between items-center text-white/70">
              <span className="text-sm">合計: {tasks.length} 個</span>
              <span className="text-sm">完了: {tasks.filter(t => t.completed).length} 個</span>
              <span className="text-sm">残り: {tasks.filter(t => !t.completed).length} 個</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
