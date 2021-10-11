import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';

test('Button renders with correct text', () => {
    render(<Search />);

    const buttonComponent = screen.getByRole('button', {
        name: 'Add Item'
    });
    expect(buttonComponent).toBeInTheDocument();

    const typographyText = screen.getByText('Add Item');
    expect(typographyText).toBeInTheDocument();
});

test('Item name input field renders', () => {
    render(<Search />);

    const inputComponent = screen.getByRole('textbox');
    expect(inputComponent).toBeInTheDocument();
})

test('Search Bar typing', () => {
    render(<Search />);

    const inputComponent = screen.getByRole('textbox');

    userEvent.type(inputComponent, 'List Item');
    expect(inputComponent).toHaveValue('List Item');

})