import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

test('Button renders with correct text', () => {
    render(<Search />);

    const buttonComponent = screen.getByRole('button');
    expect(buttonComponent).toBeInTheDocument();

    const typographyText = screen.getByText('Add Item');
    expect(typographyText).toBeInTheDocument();
});

test('Item name input field renders', () => {
    render(<Search />);

    const inputComponent = screen.getByRole('textbox');
    expect(inputComponent).toBeInTheDocument();
})