import { render, screen } from '@testing-library/react';
import ResourceDetails from './ResourceDetails';

describe('ResourceDetails', () => {
  test('renders ResourceDetails', () => {
    render(<ResourceDetails />);
    expect(screen.getByText('Resource Details')).toBeInTheDocument();
  });
});
