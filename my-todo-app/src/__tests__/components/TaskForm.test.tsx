import { render, screen, fireEvent } from '@testing-library/react';
import { TaskForm } from '../../components/TaskForm';

describe('TaskForm', () => {
  it('renders input and button', () => {
    render(<TaskForm onAdd={jest.fn()} />);
    expect(screen.getByPlaceholderText('タスク名')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '追加' })).toBeInTheDocument();
  });

  it('calls onAdd with correct task object', () => {
    const onAdd = jest.fn();
    render(<TaskForm onAdd={onAdd} />);
    const input = screen.getByPlaceholderText('タスク名');
    fireEvent.change(input, { target: { value: '新しいタスク' } });
    fireEvent.click(screen.getByRole('button', { name: '追加' }));
    expect(onAdd).toHaveBeenCalled();
    const calledArg = onAdd.mock.calls[0][0];
    expect(calledArg.title).toBe('新しいタスク');
    expect(calledArg.completed).toBe(false);
  });
});
