import React from 'react';
import styles from './endpage.css';


interface IEndPage {
  text: string;
  restartGame: () => void;
}

export function EndPage({ text, restartGame }: IEndPage) {
  return (
    <div className={styles.endPage}>
      <div className={styles.endPageText}>{text}</div>
      <button className='button' onClick={restartGame}>Restart Game</button>
    </div>
  );
}