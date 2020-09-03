import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const answer = getGcd(firstNumber, secondNumber).toString();
  const question = `${firstNumber} ${secondNumber} (${answer})`;

  return { answer, question };
};

const startEngine = () => {
  startGame(getGameData, descriptionGame);
};

export default startEngine;
