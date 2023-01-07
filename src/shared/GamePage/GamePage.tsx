import React, { CSSProperties, useEffect, useState } from 'react';
import styles from './gamepage.css';
import Card, { ICardProps } from '../Card/Card';
import { compose } from '../../utils/js/compose';
import Timer from '../Timer/Timer';
import { EndPage } from '../EndPage';


interface IGamePage {
  cardsNumber: number;
  restartGame: () => void;
}
export type cardRepresentation = { id: number, number: number; };


export function GamePage({ cardsNumber, restartGame }: IGamePage) {
  const createDeck = compose(shuffleArray, addColors, createPropsMas, createGameNumbers);

  const [propsMas, setPropsMas] = useState(createDeck(cardsNumber) as ICardProps[]);
  const [openCards, setOpenCards] = useState([] as cardRepresentation[]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [foundCardsNumber, setFoundCardsNumber] = useState(0);

  useEffect(() => {
    if (foundCardsNumber == cardsNumber) setIsGameOver(true);
  }, [foundCardsNumber]);

  useEffect(() => {
    if (openCards.length >= 2) {
      disableAll();

      setTimeout(() => {
        if (openCards[0].number == openCards[1].number) {
          markGuessed(openCards[0].number);
          setFoundCardsNumber(foundCards => foundCards + 2);
        }
        else {
          closeTheCards(openCards);
        }

        setOpenCards([]);
        undisableAll();

      }, 700);

    }
  }, [openCards]);
  //****************************************************************************************** */

  function onOpenCard(obj: cardRepresentation) {
    openTheCard(obj.id);
    setOpenCards(openCards => [...openCards, obj]);
  }
  function createPropsMas(numbers: number[]): ICardProps[] {
    return numbers.map((number, id) => ({
      id,
      key: id,
      number,
      color: '',
      isOpen: false,
      isDisabled: false,
      isGuessed: false,
      onOpen: onOpenCard,
    }));
  }

  //****************************************************************************************** */

  function disableAll() {
    setPropsMas(function (mas: ICardProps[]) {
      return mas.map(el => ({ ...el, isDisabled: true }));
    });
  }
  function undisableAll() {
    setPropsMas(function (mas: ICardProps[]) {
      return mas.map(el => ({ ...el, isDisabled: false }));
    });
  }
  function openTheCard(id: number) {
    setPropsMas((propsMas) => propsMas.map(props => props.id == id ? { ...props, isOpen: true } : props));
  }
  function closeTheCards(mas: cardRepresentation[]) {
    setPropsMas((propsMas) => propsMas.map(props => mas.some(el => el.id == props.id) ? { ...props, isOpen: false } : props));
  }
  function markGuessed(number: number) {
    setPropsMas((propsMas) => propsMas.map(props => props.number == number ? { ...props, isGuessed: true } : props));
  }

  //****************************************************************************************** */

  const fieldSize = Math.ceil(Math.sqrt(cardsNumber));
  const masCards = propsMas.map(props => <Card {...props} />);
  const gridStyle = {
    '--duration': '500ms',
    'gridTemplate': `repeat(${fieldSize}, 1fr) / repeat(${fieldSize}, 1fr)`,
    'display': 'grid'
  } as CSSProperties;

  return (
    <div>

      {isGameOver
        ? <EndPage text={foundCardsNumber == cardsNumber ? `Congratulations! You've won!` : 'Unfortunately, you have lost!'} restartGame={restartGame} />
        : <Timer onTimeOut={() => setIsGameOver(true)} time={2.5 * cardsNumber ** 1.1} />}


      <div className={styles.square} style={gridStyle}>
        {masCards}
      </div>

    </div>
  );
}



const createGameNumbers = (cardsNumber: number): number[] => {
  let mas = Array(cardsNumber).fill(0);
  for (let i = 0; i < mas.length; i += 2) {
    mas[i] = mas[i + 1] = (i + 2) / 2;
  }
  return mas;
};
const shuffleArray = <T,>(mas: T[]): T[] => {
  return [...mas].sort(() => Math.random() - 0.5);
};
function createColorArray(n: number) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(`hsl(${i / n * 360},100%,50%)`);
  }
  return res;
}
function addColors(mas: object[]) {
  let colors = createColorArray(mas.length / 2);

  return mas.map((obj, i) => ({ ...obj, color: colors[Math.floor(i / 2)] }));
}