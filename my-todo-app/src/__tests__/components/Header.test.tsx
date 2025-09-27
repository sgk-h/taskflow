import { render, screen } from '@testing-library/react';
import { Header } from '../../components/Header';

describe('Header', () => {
  it('renders app title', () => {
    render(<Header />);
    expect(screen.getByText('✨ TaskFlow')).toBeTruthy();
    expect(screen.getByText('あなたの生活を整理し、美しくタスクを管理')).toBeTruthy();
  });
});
