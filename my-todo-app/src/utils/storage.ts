// LocalStorage操作用ユーティリティ
import type { Task } from '../types/task';

const TASKS_KEY = 'todo_tasks';

export function saveTasks(tasks: Task[]) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export function loadTasks(): Task[] {
  const data = localStorage.getItem(TASKS_KEY);
  return data ? JSON.parse(data) : [];
}
