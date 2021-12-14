import React from 'react';
import styles from './review_header.module.css';

type HeaderProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  formIsHidden: boolean;
};

const Header = (props: HeaderProps) => {
  const { onClick } = props;
  return (
    <header className={styles.header}>
      <h2 className={styles.text}>Product Review</h2>
      <button
        className={props.formIsHidden ? styles.writeBtn : styles.writeBtnT}
        onClick={onClick}
      >
        Write a review
      </button>
    </header>
  );
};

export default Header;
