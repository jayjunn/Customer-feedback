import { fireEvent, render, screen } from '@testing-library/react';
import Header from './header';

it('renders write a review button ', () => {
  render(<Header />);
  expect(screen.getAllByRole('button', { name: 'Write a review' }))
    .toBeInTheDocument;
});

it('test', () => {
  render(<Header />);
  const buttonElement = screen.getByRole('button', { name: 'Write a review' });
  fireEvent.click(buttonElement);
  //   screen.debug();
});
