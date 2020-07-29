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
const numberOfRounds = 3;

const brainGcd = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const answer = getGcd(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber} (${answer})`;

  return { answer, question };
};

const initGame = () => {
  startGame(brainGcd, descriptionGame, numberOfRounds);
};

export default initGame;
