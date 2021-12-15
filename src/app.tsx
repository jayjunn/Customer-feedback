import React, { useState } from 'react';
import styles from './app.module.css';
import BarChart from './components/chart/chart';
import ReviewForm from './components/review_form/review_form';
import Reviews from './components/reviews_list/review_list';
import Header from './components/header/header';
import { mockup } from './mockupData';

function App() {
  const [reviewList, setReviewList] = useState(mockup);
  const [formValue, setFormValue] = useState({
    id: reviewList.length,
    firstName: '',
    lastName: '',
    email: '',
    rating: 0,
    comment: '',
    timeStamp: new Date().toLocaleDateString(),
  });
  const [rating, setRating] = useState(0);
  const [formIsHidden, setFormIsHidden] = useState(true);

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formValue.rating = rating;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFormValue({
      id: reviewList.length,
      firstName: '',
      lastName: '',
      email: '',
      rating: 0,
      comment: '',
      timeStamp: new Date().toLocaleDateString(),
    });
    setFormIsHidden(true);
    setValid(false);
    setSubmitted(false);
  };

  const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    formValue.rating = rating;
    setFormValue({
      id: reviewList.length,
      firstName: '',
      lastName: '',
      email: '',
      rating: 0,
      comment: '',
      timeStamp: new Date().toLocaleDateString(),
    });
    if (
      formValue.firstName &&
      formValue.lastName &&
      formValue.email &&
      formValue.rating &&
      formValue.comment
    ) {
      setValid(true);
      setReviewList([formValue, ...reviewList]);
      setFormIsHidden(true);
    } else if (
      !formValue.firstName &&
      !formValue.lastName &&
      !formValue.email &&
      !formValue.rating &&
      !formValue.comment
    ) {
      setValid(false);
    }
    setSubmitted(true);
  };

  const onClick = () => {
    setFormIsHidden(false);
    setValid(false);
    setSubmitted(false);
  };

  return (
    <div className={styles.app}>
      <Header onClick={onClick} formIsHidden={formIsHidden} />
      {submitted && (
        <h3 className={valid ? styles.save_success : styles.save_fail}>
          Your review has been saved!
        </h3>
      )}

      {!formIsHidden && (
        <ReviewForm
          formValue={formValue}
          onChange={onChange}
          onCancel={onCancel}
          onSubmit={onSubmit}
          onClick={onClick}
          formIsHidden={formIsHidden}
          rating={rating}
          setRating={setRating}
          submitted={submitted}
          valid={valid}
        />
      )}
      <section className={styles.dashboard}>
        <BarChart totalReview={reviewList.length} reviewList={reviewList} />
      </section>
      <Reviews reviewList={reviewList} />
    </div>
  );
}

export default App;
