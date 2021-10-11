import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
 
//   // screen.debug();
// });

test('Search bar typing & Add Item Button Press', () => {
  render(<App />);

  const inputComponent = screen.getByRole('textbox');
  const buttonComponent = screen.getByRole('button', {
    name: 'Add Item'
  });

  userEvent.type(inputComponent, 'List Item');
  expect(inputComponent).toHaveValue('List Item');

  userEvent.click(buttonComponent);
  expect(inputComponent).toHaveValue('');
});