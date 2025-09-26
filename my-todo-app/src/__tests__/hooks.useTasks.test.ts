import { renderHook, act } from '@testing-library/react';
import { useTasks } from '../hooks/useTasks';

describe('useTasks', () => {
  it('初期状態は空配列', () => {
    const { result } = renderHook(() => useTasks());
    expect(result.current.tasks).toEqual([]);
  });

  it('タスクを追加できる', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask({
        id: '1',
        title: '新規タスク',
        description: '',
        completed: false,
        priority: 'medium',
        createdAt: '',
        updatedAt: '',
      });
    });
    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].title).toBe('新規タスク');
  });

  it('タスクの完了状態をトグルできる', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask({
        id: '1',
        title: 'タスク',
        description: '',
        completed: false,
        priority: 'medium',
        createdAt: '',
        updatedAt: '',
      });
  result.current.toggleComplete('1');
    });
    expect(result.current.tasks[0].completed).toBe(true);
  });

  it('タスクを削除できる', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask({
        id: '1',
        title: '削除タスク',
        description: '',
        completed: false,
        priority: 'medium',
        createdAt: '',
        updatedAt: '',
      });
      result.current.deleteTask('1');
    });
    expect(result.current.tasks.length).toBe(0);
  });
});
