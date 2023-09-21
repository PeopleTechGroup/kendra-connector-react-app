import React from 'react';
import { render, screen } from '@testing-library/react';
import Documentation from 'components/Documentation';

describe('Documentation Component', () => {
  it('renders without crashing', () => {
    render(<Documentation />);
  });

  it('displays the correct title', () => {
    const { getByText } = render(<Documentation />);
    const titleElement = getByText('AWS Kendra Documentation');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays cards with expected content', () => {
    const { getByText } = render(<Documentation />);
    const connectorsCard = getByText('Connectors');
    expect(connectorsCard).toBeInTheDocument();

  });
});
