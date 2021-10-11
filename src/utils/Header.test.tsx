import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders Typography component and text', () => {
    render(<Header />);
    const typographyText = screen.getByText('Manage my items');
    expect(typographyText).toBeInTheDocument();
    
    const typographyComponent = screen.getByRole('heading');
    expect(typographyComponent).toBeInTheDocument();

});