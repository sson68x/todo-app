import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../app';

test('Should render text', () => {
  render(<App />);
  const text = screen.getByText('To Do Item');
  expect(text).toBeInTheDocument();
});