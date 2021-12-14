import React from 'react';
import ReviewForm from './review_form';
import { render, screen, fireEvent } from '@testing-library/react';

it('renders inputs ', () => {
  render(<ReviewForm />);
  expect(screen.getByPlaceholderText('Enter your first name.'))
    .toBeInTheDocument;
  expect(screen.getByPlaceholderText('Enter your last name.'))
    .toBeInTheDocument;
  expect(screen.getByPlaceholderText('Enter your first name.'))
    .toBeInTheDocument;
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
