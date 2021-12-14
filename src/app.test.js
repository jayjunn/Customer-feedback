import React from 'react';
import * as ReactDOM from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './app';
import ReviewForm from './components/review_form/review_form';
import Header from './components/review_header/review_header';

it('renders  without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders  "write a review" button correctly ', () => {
  const { getByRole } = render(<App />);
  getByRole('button', { name: /Write a review/i });
});

it('renders reviewList', () => {
  const { getByText } = render(<App />);
  getByText('See all reviews');
  getByText('Submit');
});

it('test', () => {
  render(<Header />);
  const buttonElement = screen.getByRole('button', { name: 'Write a review' });
  fireEvent.click(buttonElement);
});
