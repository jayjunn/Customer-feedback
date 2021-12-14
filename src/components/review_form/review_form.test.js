import React from 'react';
import ReviewForm from './review_form';
import { render, screen } from '@testing-library/react';

const props = {
  formValue: {
    firstName: 'first',
    lastName: 'last',
    email: 'email',
    rating: 5,
    comment: 'comment',
    timeStamp: 'string',
  },
  formIsHidden: true,
  rating: 5,
  submitted: true,
  valid: true,
  onclick: jest.MockedFunction(),
  onChange: jest.fn,
  onCancel: jest.fn,
  onSubmit: jest.fn,
  setRating: jest.fn,
};

it('renders inputs ', () => {
  render(<ReviewForm {props} />);
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
