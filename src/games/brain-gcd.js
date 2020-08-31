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
  return String(a);
};

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const answer = getGcd(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber} (${answer})`;

  return { answer, question };
};

const initGame = () => {
  startGame(getGameData, descriptionGame);
};

export default initGame;
