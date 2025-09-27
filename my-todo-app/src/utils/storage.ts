// LocalStorage操作用ユーティリティ
import type { Task } from '../types/task';

const TASKS_KEY = 'todo_tasks';

export function saveTasks(tasks: Task[]) {
  try {
    console.log('Saving tasks to localStorage:', tasks);
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    console.log('Tasks saved successfully');
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
}

export function loadTasks(): Task[] {
  try {
    console.log('Loading tasks from localStorage');
    const data = localStorage.getItem(TASKS_KEY);
    const tasks = data ? JSON.parse(data) : [];
    console.log('Loaded tasks:', tasks);
    return tasks;
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
}
