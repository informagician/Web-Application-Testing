import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Display from './components/Display'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Balls/i);
  expect(linkElement).toBeInTheDocument();
});
