import React from 'react';
import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Header from './review_header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('renders write a review button ', () => {
  render(<Header />);
  expect(screen.getAllByRole('button', { name: 'Write a review' }))
    .toBeInTheDocument;
});

