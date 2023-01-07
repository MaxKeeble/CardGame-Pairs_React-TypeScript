import React, { useEffect, useState } from 'react';
import { classNames } from '../../utils/js/classNames';
import styles from './timer.css';


interface ITimerProps {
  time: number;
  onTimeOut: () => void;
}

export function Timer({ onTimeOut, time }: ITimerProps) {
  const [time_, setTime] = useState(Math.round(time));

  useEffect(() => {
    let i: number;

    if (time_ > 0) {
      i = setTimeout(() => setTime(time => time - 1), 1000) as any as number;
    }
    else onTimeOut();

    return () => clearTimeout(i);
  }, [time_]);


  return (
    <div>
      <div className={classNames(styles.timerOutput, { [styles.shortTime]: time_ < 11 && time_ > 0 })} >{formatTime(time_)}</div>
    </div>
  );
}


const formatTime = (t: number): string => {
  const hours = Math.floor(t / 3600);
  t %= 3600;
  const minutes = Math.floor(t / 60);
  const seconds = t % 60;

  return numberTo2DigitString(hours) + ':' + numberTo2DigitString(minutes) + ':' + numberTo2DigitString(seconds);
};

const numberToXDigitString = (x: number) => (n: number): string => '0'.repeat(x - (n + '').length) + n;
const numberTo2DigitString = numberToXDigitString(2);
export default React.memo(Timer);