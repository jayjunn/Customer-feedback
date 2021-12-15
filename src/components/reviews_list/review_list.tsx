import React from 'react';
import Review from '../review_item/review_item';
import styles from './review_list.module.css';

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

const ReviewList = (props: ReviewListProps) => {
  return (
    <div className={styles.review_box}>
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
    </div>
  );
};

export default ReviewList;
