import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

test('renders the MainPage component', () => {
  render(<MainPage />);
  const titleElement = screen.getByText("Hi");
  expect(titleElement).toBeInTheDocument();
});
