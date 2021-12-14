import { fireEvent, render, screen } from '@testing-library/react';
import App from './app';

jest.mock('react-chartjs-2', () => ({
  Doughnut: () => null,
}));

it('renders  "write a review" button correctly ', () => {
  const { getByRole } = render(<App />);
  getByRole('button', { name: /Write a review/i });
});

it('renders reviewList', () => {
  render(<App />);
  const text = screen.getByText('See all reviews');
  const afterListItems2 = screen.getAllByRole('listitem');
  expect(text).toBeInTheDocument;
  expect(afterListItems2.length).toBe(3);
});

it('renders review form section when write a review button is clicked', () => {
  render(<App />);
  const writeBtn = screen.getByRole('button', { name: 'Write a review' });
  fireEvent.click(writeBtn);
  const submitBtn = screen.getByRole('button', { name: 'Submit' });
  expect(submitBtn).toBeInTheDocument;
});

it('shows error message when submit button clicked with unfilled inputs', () => {
  render(<App />);
  const writeBtn = screen.getByRole('button', { name: 'Write a review' });
  fireEvent.click(writeBtn);
  const submitBtn = screen.getByRole('button', { name: 'Submit' });
  fireEvent.click(submitBtn);
  const errorMsg = screen.getByText('Please enter your name');
  expect(errorMsg).toBeInTheDocument;
});

it('closes the form section when cancel button clicked', () => {
  render(<App />);
  const writeBtn = screen.getByRole('button', { name: 'Write a review' });
  fireEvent.click(writeBtn);
  const cancelBtn = screen.getByRole('button', { name: 'Cancel' });
  const errorMsg = screen.getByPlaceholderText('Enter your first name.');
  fireEvent.click(cancelBtn);
  expect(errorMsg).not.toBeInTheDocument;
});

it('adds a review item into the review list when it is submitted with filled inputs', () => {
  render(<App />);
  const writeBtn = screen.getByRole('button', { name: 'Write a review' });
  fireEvent.click(writeBtn);
  const firstName = screen.getByPlaceholderText('Enter your first name.');
  const lastName = screen.getByPlaceholderText('Enter your last name.');
  const email = screen.getByPlaceholderText('Enter your email here.');
  const comment = screen.getByPlaceholderText(
    'This is where you write you review.'
  );
  const star = screen.getByTestId('1start');

  fireEvent.change(firstName, {
    target: { value: 'first' },
  });
  fireEvent.change(lastName, {
    target: { value: 'lastName' },
  });

  fireEvent.change(email, {
    target: { value: 'email' },
  });
  fireEvent.change(comment, {
    target: { value: 'comment' },
  });
  fireEvent.click(star);
  const submitBtn = screen.getByRole('button', { name: 'Submit' });
  fireEvent.click(submitBtn);
  const afterListItems2 = screen.getAllByRole('listitem');
  expect(afterListItems2.length).toBe(4);
});
