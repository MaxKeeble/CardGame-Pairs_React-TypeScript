import React from 'react';
import { classNames } from '../../utils/js/classNames';
import { cardRepresentation } from '../GamePage';
import styles from './card.css';


export interface ICardProps {
  id: number;
  number: number;
  color: string;
  isOpen: boolean;
  isDisabled: boolean;
  isGuessed: boolean;
  onOpen: (obj: cardRepresentation) => void;
  [key: string]: any;
}

export function Card({ isOpen, isDisabled, isGuessed, onOpen, number, id, color }: ICardProps) {

  const handleToggle = () => {
    if (!isOpen && !isDisabled) onOpen({ number, id });
  };

  return (
    <div className={styles.scene} onClick={handleToggle}>
      <div className={classNames(styles.card, { [styles.guessed]: isGuessed, [styles.open]: isOpen })} >

        <div className={styles.face} style={{ backgroundColor: color }}>{number}</div>
        <div className={styles.back}></div>

      </div>
    </div>
  );
}

export default React.memo(Card);