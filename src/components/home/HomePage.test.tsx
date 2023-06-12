import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

test('renders HomePage component with a link to Results', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  const linkElement = screen.getByRole('link', { name: /go to results/i });
  expect(linkElement).toBeTruthy();
  expect(linkElement.getAttribute('href')).toBe('/results');
});
