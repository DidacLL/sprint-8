import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/View Starships/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders NavBar with home link', () => {
    render(<App/>);
    expect(screen.getByText(/HOME/i)).toBeInTheDocument();
});

test('renders NavBar with characters link', () => {
    render(<App/>);
    expect(screen.getByText(/CHARACTERS/i)).toBeInTheDocument();

});
test('renders NavBar with films link', () => {
    render(<App/>);
    expect(screen.getByText(/FILMS/i)).toBeInTheDocument();

});

test('renders de login button', () => {
    render(<App/>);
    expect(screen.getByText(/LOG IN/i)).toBeInTheDocument();
});

test('renders the signup button', () => {
    render(<App/>);
    expect(screen.getByText(/SIGN UP/i)).toBeInTheDocument();
});