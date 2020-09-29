import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
ReactDOM.render(<App />, div);
});

it('renders "Pet Friendly" header', () => {
  const { getByText } = render(<App />);
  expect(getByText('Pet Friendly')).toBeInTheDocument();
});

it('redirects to login flow when user is not logged in', () => {
  const { getByText } = render(<App />);
  window.localStorage.clear();
  expect(getByText('Login here if you already have an account with us.')).toBeInTheDocument();
});

it('redirects to register page when link is clicked', () => {
});

it('validates email and password for login', () => {
});

it('if user is authenticated, login button will take user to homepage', () => {
});


