import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0);
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const number = getRandomNumber(0, 10);
  const answer = getCorrectAnswer(number);
  const question = `Question: ${number}`;

  return { answer, question };
};

const initGame = () => {
  startGame(brainEven, descriptionGame);
};

export default initGame;
