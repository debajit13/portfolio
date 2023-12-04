import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi, Welcome to my space/i);
  expect(linkElement).toBeInTheDocument();
});
