import { render, screen, fireEvent } from '@testing-library/react';
import { TaskItem } from '../../components/TaskItem';
import type { Task } from '../../types/task';

describe('TaskItem', () => {
  const baseTask: Task = {
    id: '1',
    title: 'テストタスク',
    description: '詳細',
    completed: false,
    priority: 'high',
    createdAt: '',
    updatedAt: '',
  };

  it('renders task title, description, and priority', () => {
    render(
      <TaskItem task={baseTask} onToggle={jest.fn()} onDelete={jest.fn()} />
    );
    expect(screen.getByText('テストタスク')).toBeTruthy();
    expect(screen.getByText('詳細')).toBeTruthy();
    expect(screen.getByText('高い優先度')).toBeTruthy();
  });

  it('calls onToggle when checkbox is clicked', () => {
    const onToggle = jest.fn();
    render(
      <TaskItem task={baseTask} onToggle={onToggle} onDelete={jest.fn()} />
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onToggle).toHaveBeenCalledWith('1');
  });

  it('calls onDelete when 削除 button is clicked and confirmed', () => {
    // window.confirm をモック - JSDOMで確実に動作するように
    Object.defineProperty(window, 'confirm', {
      writable: true,
      value: jest.fn(() => true)
    });

    const onDelete = jest.fn();
    render(
      <TaskItem task={baseTask} onToggle={jest.fn()} onDelete={onDelete} />
    );
    
    const deleteButton = screen.getByTitle('タスクを削除');
    fireEvent.click(deleteButton);
    
    expect(window.confirm).toHaveBeenCalledWith('このタスクを削除しますか？');
    expect(onDelete).toHaveBeenCalledWith('1');
  });

  it('does not call onDelete when deletion is cancelled', () => {
    // window.confirm をモック - JSDOMで確実に動作するように
    Object.defineProperty(window, 'confirm', {
      writable: true,
      value: jest.fn(() => false)
    });

    const onDelete = jest.fn();
    render(
      <TaskItem task={baseTask} onToggle={jest.fn()} onDelete={onDelete} />
    );
    
    const deleteButton = screen.getByTitle('タスクを削除');
    fireEvent.click(deleteButton);
    
    expect(window.confirm).toHaveBeenCalledWith('このタスクを削除しますか？');
    expect(onDelete).not.toHaveBeenCalled();
  });
});
