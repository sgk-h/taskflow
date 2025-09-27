import { render, screen, fireEvent } from '@testing-library/react';
import { FilterBar } from '../../components/FilterBar';

describe('FilterBar', () => {
  it('renders all filter buttons', () => {
    render(<FilterBar filter="all" setFilter={jest.fn()} />);
    expect(screen.getByText('すべて')).toBeTruthy();
    expect(screen.getByText('進行中')).toBeTruthy();
    expect(screen.getByText('完了')).toBeTruthy();
  });

  it('calls setFilter with correct filter', () => {
    const setFilter = jest.fn();
    render(<FilterBar filter="all" setFilter={setFilter} />);
    fireEvent.click(screen.getByText('進行中'));
    expect(setFilter).toHaveBeenCalledWith('incomplete');
    fireEvent.click(screen.getByText('完了'));
    expect(setFilter).toHaveBeenCalledWith('completed');
  });
});
