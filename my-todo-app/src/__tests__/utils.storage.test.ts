import { saveTasks, loadTasks } from '../utils/storage';
import type { Task } from '../types/task';

describe('storage utils', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save and load tasks', () => {
    const tasks: Task[] = [
      { id: '1', title: 'test', completed: false, priority: 'low', createdAt: '', updatedAt: '' },
    ];
    saveTasks(tasks);
    const loaded = loadTasks();
    expect(loaded).toEqual(tasks);
  });
});
