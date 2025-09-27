import { useState, useEffect } from 'react';
import type { Task } from '../types/task';
import { saveTasks, loadTasks } from '../utils/storage';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task: Task) => {
    console.log('useTasks: Adding task:', task);
    setTasks(prev => {
      const newTasks = [...prev, task];
      console.log('useTasks: New tasks array:', newTasks);
      return newTasks;
    });
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updates, updatedAt: new Date().toISOString() } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed, updatedAt: new Date().toISOString() } : t));
  };

  return { tasks, setTasks, addTask, updateTask, deleteTask, toggleComplete };
}
