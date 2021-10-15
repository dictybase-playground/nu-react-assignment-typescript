import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

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

test('Adding an item to the list', () => {
  render(<App />);

  const inputComponent = screen.getByRole('textbox');
  const buttonComponent = screen.getByRole('button', {
    name: 'Add Item'
  });

  userEvent.type(inputComponent, 'List Item');
  expect(inputComponent).toHaveValue('List Item');

  userEvent.click(buttonComponent);
  expect(inputComponent).toHaveValue('');

  const newItemText = screen.getByText('List Item');
  expect(newItemText).toBeInTheDocument();
});
