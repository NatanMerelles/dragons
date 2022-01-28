import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('should render login page logged out', () => {
  render(<App />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render home page logged in', () => {
  render(<App />);
  const login = screen.getByLabelText('login');
  const password = screen.getByLabelText('password');
  const button = screen.getByRole('button');

  fireEvent.change(login, { target: { value: 'admin' } })
  fireEvent.change(password, { target: { value: '123123' } })
  fireEvent.click(button);

  expect(screen.getByText(/dragonsrepo/i)).toBeInTheDocument();
});