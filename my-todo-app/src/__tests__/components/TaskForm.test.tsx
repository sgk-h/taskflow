import { render, screen, fireEvent } from '@testing-library/react';
import { TaskForm } from '../../components/TaskForm';

describe('TaskForm', () => {
  it('renders input and button', () => {
    render(<TaskForm onAdd={jest.fn()} />);
    expect(screen.getByPlaceholderText('✨ 今日は何をしますか？')).toBeTruthy();
    expect(screen.getByText('タスクを追加')).toBeTruthy();
  });

  it('calls onAdd with correct task object', () => {
    const onAdd = jest.fn();
    render(<TaskForm onAdd={onAdd} />);
    const input = screen.getByPlaceholderText('✨ 今日は何をしますか？');
    fireEvent.change(input, { target: { value: '新しいタスク' } });
    fireEvent.click(screen.getByText('タスクを追加'));
    expect(onAdd).toHaveBeenCalled();
    const calledArg = onAdd.mock.calls[0][0];
    expect(calledArg.title).toBe('新しいタスク');
    expect(calledArg.completed).toBe(false);
  });
});
