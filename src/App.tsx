import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './main.global.css';
import { Container } from './shared/Container';
import { StartPage } from './shared/StartPage';
import { GamePage } from './shared/GamePage';


function AppComponent() {

  const [isGameStart, setGameStart] = useState(false);
  const [cardsNumber, setCardsNumber] = useState(4);

  const getCardsNumber = (cardsNumber_: number) => {
    setGameStart(true);
    setCardsNumber(cardsNumber_);
  };

  const restartGame = () => {
    setGameStart(false);
  };

  return (
    <Container>

      {!isGameStart && <StartPage getCardsNumber={getCardsNumber} defaultValue={cardsNumber} />}
      {isGameStart && <GamePage cardsNumber={cardsNumber} restartGame={restartGame} />}

    </Container>
  );
}

export const App = hot(() => <AppComponent />);