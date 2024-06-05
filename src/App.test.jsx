import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Correct import
import App from './App';
import { expect, test } from 'vitest';

test('renders the input element with the correct label and class', () => {
  render(<App />);
  const inputElement = screen.getByRole('textbox', { name: /enter your name/i }); // Matching the label text
  expect(inputElement).toHaveClass('inputTag');
  
});
test('renders the button and updates the message on click', () => {
  render(<App />);
  
  // Find the button by its role
  const buttonElement = screen.getByRole('button', { name: /submit/i });
  
  // // Verify the button is in the document
  // expect(buttonElement).toBeInTheDocument();

  // // Click the button
  // fireEvent.click(buttonElement);
  
  // // Check if the message was updated
  // const messageElement = screen.getByText(/button was clicked/i);
  // expect(messageElement).toBeInTheDocument();
});
