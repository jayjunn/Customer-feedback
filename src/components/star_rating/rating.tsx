import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './rating.module.css';
import { FaStar } from 'react-icons/fa';

type StarRatingProps = {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  formValue: {
    firstName: string;
    lastName: string;
    email: string;
    rating: number;
    comment: string;
    timeStamp: string;
  };
};

const StarRating = (props: StarRatingProps) => {
  const defaultStarts: number | undefined[] = [...Array(5)];
  const [hover, setHover] = useState(0);

  return (
    <div className={styles.container}>
      {defaultStarts.map((star, idx) => {
        const ratingValue: number = idx + 1;
        return (
          <label key={ratingValue} className={styles.rating_label}>
            <input
              type="radio"
              name="rating"
              className={styles.radioBtn}
              value={ratingValue}
              onClick={() => props.setRating(ratingValue)}
            />
            <FaStar
              className={styles.star}
              size={34}
              color={
                ratingValue <= (hover || props.rating) ? '#F0C435' : '#F0F0F0'
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
