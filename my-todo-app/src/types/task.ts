export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export type TaskFilter = 'all' | 'completed' | 'incomplete';

export interface AppState {
  tasks: Task[];
  filter: TaskFilter;
  searchQuery: string;
  selectedCategory?: string;
}
