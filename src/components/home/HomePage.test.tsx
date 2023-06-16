import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';
import { describe, expect } from 'vitest';

describe('renders HomePage component with a link to Results', () => {
  it('should render the results correctly', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', { name: /go to results/i });
    expect(linkElement).toBeTruthy();
    expect(linkElement.getAttribute('href')).toBe('/results');
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
  });
});
