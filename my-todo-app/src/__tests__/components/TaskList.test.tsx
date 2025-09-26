import { render, screen, fireEvent } from '@testing-library/react';
import { TaskList } from '../../components/TaskList';
import type { Task } from '../../types/task';

describe('TaskList', () => {
  const tasks: Task[] = [
    { id: '1', title: 'タスク1', description: '', completed: false, priority: 'medium', createdAt: '', updatedAt: '' },
    { id: '2', title: 'タスク2', description: '', completed: true, priority: 'low', createdAt: '', updatedAt: '' },
  ];
  it('renders all tasks', () => {
    render(
      <TaskList 
        tasks={tasks} 
        onToggle={jest.fn()} 
        onDelete={jest.fn()} 
      />
    );
    expect(screen.getByText('タスク1')).toBeInTheDocument();
    expect(screen.getByText('タスク2')).toBeInTheDocument();
  });

  it('calls onToggle when checkbox is clicked', () => {
    const onToggle = jest.fn();
    render(
      <TaskList 
        tasks={tasks} 
        onToggle={onToggle} 
        onDelete={jest.fn()} 
      />
    );
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    expect(onToggle).toHaveBeenCalledWith('1');
  });
});
