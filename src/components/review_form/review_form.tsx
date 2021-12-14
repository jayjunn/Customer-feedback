import React, { Dispatch, SetStateAction } from 'react';
import StarRating from '../star_rating/rating';
import styles from './review_form.module.css';

type ReviewFormProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  formValue: {
    firstName: string;
    lastName: string;
    email: string;
    rating: number;
    comment: string;
    timeStamp: string;
  };
  formIsHidden: boolean;
  rating: number;
  submitted: boolean;
  valid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel: (e: React.MouseEvent<HTMLElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLElement>) => void;
  setRating: Dispatch<SetStateAction<number>>;
};

const ReviewForm = (props: ReviewFormProps) => {
  return (
    <div className={props.formIsHidden ? styles.formHide : styles.formShow}>
      <h2>Tell us your opinion</h2>
      <form>
        <div className={styles.container}>
          <label htmlFor="firstName" className={styles.label}>
            Name
          </label>
          <div className={styles.input_name}>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name."
              className={styles.input_first_name}
              onChange={props.onChange}
            />
            <input
              type="text"
              name="lastName"
              className={styles.input_last_name}
              placeholder="Enter your last name."
              onChange={props.onChange}
            />
          </div>
          {props.submitted && !props.valid ? (
            <span className={styles.error_text}>Please enter your name</span>
          ) : null}
        </div>
        <div className={styles.container}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter email here."
            className={styles.input}
            onChange={props.onChange}
          />
          {props.submitted && !props.valid ? (
            <span className={styles.error_text}>Please enter your email</span>
          ) : null}
        </div>

        <div className={styles.container}>
          <label htmlFor="rating" className={styles.label}>
            Rating
          </label>
          <StarRating
            rating={props.rating}
            setRating={props.setRating}
            formValue={props.formValue}
          />
          {props.submitted && !props.valid ? (
            <span className={styles.error_text}>Please rate your product</span>
          ) : null}
        </div>

        <div className={styles.container}>
          <label htmlFor="comment" className={styles.label}>
            Comment
          </label>
          <input
            type="text"
            name="comment"
            placeholder="This is where you write you review."
            className={styles.input_comment}
            onChange={props.onChange}
          />
          {props.submitted && !props.valid ? (
            <span className={styles.error_text}>Please enter your comment</span>
          ) : null}
        </div>
        <br />
        <div className={styles.button_wrapper}>
          <button
            className={styles.cancelBtn}
            name="Cancel"
            onClick={props.onCancel}
          >
            Cancel
          </button>
          <button
            className={styles.submitBtn}
            name="Submit"
            onClick={props.onSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
