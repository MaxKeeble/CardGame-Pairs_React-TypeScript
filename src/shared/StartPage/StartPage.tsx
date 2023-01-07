import React, { SyntheticEvent, useState } from 'react';
import styles from './startpage.css';


const NOOP = () => {};

interface IStartPage {
  defaultValue: number;
  getCardsNumber: (value: number) => void;
}

export function StartPage({ getCardsNumber = NOOP, defaultValue }: IStartPage) {

  const [count, setCount] = useState(defaultValue);

  const changeInput = (e: SyntheticEvent<HTMLInputElement>) => {
    let value = +e.currentTarget.value;
    value = validateValue(value);
    setCount(value);
  };


  return (
    <form className={styles.from} action="#">
      <span className={styles.span}>Введите размер поля:</span>
      <input className={styles.input} type="number" min={2} max={26} step={2} onChange={changeInput} value={count} />

      <button className='button' onClick={() => getCardsNumber(count)}>Start Game</button>
    </form>
  );
}


function validateValue(v: number) {
  if (v % 2 !== 0) v = v - 1;
  return Math.max(Math.min(v, 26), 2);
}