import React from 'react';
import { render, screen } from '@testing-library/react';
import Test from './App';

test('renders learn react link', () => {
  render(<Test.App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
