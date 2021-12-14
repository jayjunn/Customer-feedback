import React from 'react';
import Review from '../review/review';
import styles from './reviews.module.css';

type ReviewListProps = {
  reviewList: {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    comment?: string;
    rating?: number;
    timeStamp?: string;
    testTimeStamp?: string;
  }[];
};

const Reviews = (props: ReviewListProps) => {
  return (
    <>
      <h4>See all reviews</h4>
      <ul className={styles.review_list}>
        {props.reviewList.map((item) => (
          <Review
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            rating={item.rating}
            comment={item.comment}
            timeStamp={item.timeStamp}
          />
        ))}
      </ul>
    </>
  );
};

export default Reviews;
