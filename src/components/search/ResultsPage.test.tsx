import { render, screen } from '@testing-library/react';
import ResultsPage from './ResultsPage';

vi.mock('./useSearchResults', () => ({
  useSearchResults: () => [
    { title: 'Title 1', body: 'Body 1' },
    { title: 'Title 2', body: 'Body 2' },
  ],
}));

vi.mock('./useCardStyles', () => ({
  useStyles: () => ({
    card: 'mock-card',
    title: 'mock-title',
    body: 'mock-body',
  }),
}));

describe('ResultsPage', () => {
  it('should render the results correctly', () => {
    render(<ResultsPage />);

    const title1 = screen.getByText('Title 1');
    const body1 = screen.getByText('Body 1');
    const title2 = screen.getByText('Title 2');
    const body2 = screen.getByText('Body 2');

    expect(title1).toBeInTheDocument();
    expect(body1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(body2).toBeInTheDocument();
  });
});
