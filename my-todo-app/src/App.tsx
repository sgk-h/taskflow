
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
      <main className="max-w-2xl mx-auto py-8 px-4">
        <div className="glass-effect card-hover rounded-3xl p-8 shadow-2xl">
          <TaskForm onAdd={addTask} />
          <FilterBar filter={filter} setFilter={setFilter} />
          <TaskList tasks={filteredTasks} onToggle={toggleComplete} onDelete={deleteTask} />
        </div>
      </main>
    </div>
  );
}

export default App;
