import { render, screen, fireEvent } from '@testing-library/react';
import { FilterBar } from '../../components/FilterBar';

describe('FilterBar', () => {
  it('renders all filter buttons', () => {
    render(<FilterBar filter="all" setFilter={jest.fn()} />);
    expect(screen.getByRole('button', { name: '全て' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '未完了' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '完了' })).toBeInTheDocument();
  });

  it('calls setFilter with correct filter', () => {
    const setFilter = jest.fn();
    render(<FilterBar filter="all" setFilter={setFilter} />);
    fireEvent.click(screen.getByRole('button', { name: '未完了' }));
    expect(setFilter).toHaveBeenCalledWith('incomplete');
    fireEvent.click(screen.getByRole('button', { name: '完了' }));
    expect(setFilter).toHaveBeenCalledWith('completed');
  });
});
