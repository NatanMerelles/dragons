import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { FooterItems } from './';
import theme from '../../styles/theme';

test('should render footer-items', () => {
  render(
    <ThemeProvider theme={theme('dark')}>
      <FooterItems
        isOpen={true}
        countItems={36}
      />
    </ThemeProvider>
  );

  const count = screen.getByText(/36/i);
  expect(count).toBeInTheDocument();
});

test('should call onDismiss when footer-items dismiss', () => {
  const mockedOnDismiss = jest.fn();

  render(
    <ThemeProvider theme={theme('dark')}>
      <FooterItems
        isOpen={true}
        onDismiss={mockedOnDismiss}
      />
    </ThemeProvider>
  );

  const buttonDismiss = screen.getByLabelText('dismiss');
  fireEvent.click(buttonDismiss);

  expect(mockedOnDismiss).toHaveBeenCalled();
});

test('should call onConfirm when footer-items confirm', () => {
  const mockedOnConfirm = jest.fn();

  render(
    <ThemeProvider theme={theme('dark')}>
      <FooterItems
        isOpen={true}
        onConfirm={mockedOnConfirm}
      />
    </ThemeProvider>
  );

  const buttonConfirm = screen.getByLabelText('confirm');
  fireEvent.click(buttonConfirm);

  expect(mockedOnConfirm).toHaveBeenCalled();
});

test('should disable buttons when loading', () => {
  render(
    <ThemeProvider theme={theme('dark')}>
      <FooterItems
        isLoading={true}
      />
    </ThemeProvider>
  );

  const buttonConfirm = screen.getByLabelText('confirm');
  const buttonDismiss = screen.getByLabelText('dismiss');

  expect(buttonConfirm).toHaveAttribute('disabled');
  expect(buttonDismiss).toHaveAttribute('disabled');
});