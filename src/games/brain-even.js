import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0);
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

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
