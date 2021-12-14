import React from 'react';
import * as ReactDOM from 'react-dom';
import ReviewForm from './review_form';
import { render, screen, fireEvent } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewForm />, div);
});

it('renders inputs ', () => {
  render(<ReviewForm />);
  expect(screen.getByPlaceholderText('Enter your first name.'))
    .toBeInTheDocument;
  expect(screen.getByPlaceholderText('Enter your last name.'))
    .toBeInTheDocument;
  expect(screen.getByPlaceholderText('Enter email here.')).toBeInTheDocument;
  expect(screen.getByPlaceholderText('This is where you write you review.'))
    .toBeInTheDocument;
});

it('renders cancel button ', () => {
  render(<ReviewForm />);
  expect(screen.getAllByRole('button', { name: 'Cancel' })).toBeInTheDocument;
});

it('renders submit button ', () => {
  render(<ReviewForm />);
  expect(screen.getAllByRole('button', { name: 'Submit' })).toBeInTheDocument;
});

it('test', async () => {
  render(<ReviewForm />);
  const buttonElement2 = screen.getByRole('button', { name: 'Cancel' });
  fireEvent.click(buttonElement2);
});
