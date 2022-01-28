import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Modal } from './';
import theme from '../../styles/theme';

test('should render modal', () => {
  render(
    <ThemeProvider theme={theme('dark')}>
      <Modal isOpen={true}>
        testing
      </Modal>
    </ThemeProvider>
  );

  const linkElement = screen.getByText(/testing/i);
  expect(linkElement).toBeInTheDocument();
});