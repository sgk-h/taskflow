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
    expect(screen.getByText('テストタスク')).toBeInTheDocument();
    expect(screen.getByText('詳細')).toBeInTheDocument();
    expect(screen.getByText('high')).toBeInTheDocument();
  });

  it('calls onToggle when checkbox is clicked', () => {
    const onToggle = jest.fn();
    render(
      <TaskItem task={baseTask} onToggle={onToggle} onDelete={jest.fn()} />
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onToggle).toHaveBeenCalledWith('1');
  });

  it('calls onDelete when 削除 button is clicked', () => {
    const onDelete = jest.fn();
    render(
      <TaskItem task={baseTask} onToggle={jest.fn()} onDelete={onDelete} />
    );
    fireEvent.click(screen.getByText('削除'));
    expect(onDelete).toHaveBeenCalledWith('1');
  });
});
