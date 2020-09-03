import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const number = getRandomNumber(0, 10);
  const answer = getCorrectAnswer(number);
  const question = number.toString();

  return { answer, question };
};

const startEngine = () => {
  startGame(getGameData, descriptionGame);
};

export default startEngine;
