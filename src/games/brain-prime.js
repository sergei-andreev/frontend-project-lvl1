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
const numberOfRounds = 3;

const brainPrime = () => {
  const number = getRandomNumber(0, 10);
  const answer = getCorrectAnswer(number);
  const question = `Question: ${number}`;

  return { answer, question };
};

const initGame = () => {
  startGame(brainPrime, descriptionGame, numberOfRounds);
};

export default initGame;
