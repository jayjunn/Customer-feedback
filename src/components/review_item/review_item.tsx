import React from 'react';
import styles from './review_item.module.css';
import { FaStar } from 'react-icons/fa';
type ReviewProps = {
  firstName?: string;
  lastName?: string;
  rating?: number;
  comment?: string;
  timeStamp?: string;
  id?: number;
};

const Review = (props: ReviewProps) => {
  const showStarts = (rating: number | undefined): number[] => {
    switch (rating) {
      case 1:
        return [1];
      case 2:
        return [1, 2];
      case 3:
        return [1, 2, 3];
      case 4:
        return [1, 2, 3, 4];
      case 5:
        return [1, 2, 3, 4, 5];
      default:
        return [];
    }
  };

  return (
    <>
      <li className={styles.container}>
        <div className={styles.star_rating}>
          {showStarts(props.rating).map((item, idx) => {
            return <FaStar key={idx}></FaStar>;
          })}
        </div>
        <h5
          className={styles.name_date}
        >{`${props.firstName} ${props.lastName} | ${props?.timeStamp}`}</h5>
        <span className={styles.comment}>{props.comment}</span>
      </li>
    </>
  );
};

export default Review;
