import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getCorrectAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return String(firstNumber + secondNumber);
    case '-':
      return String(firstNumber - secondNumber);
    case '*':
      return String(firstNumber * secondNumber);
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const mathOperators = '+-*';
const getRandomOperator = () => mathOperators[getRandomNumber(0, mathOperators.length)];

const descriptionGame = 'What is the result of the expression?';

const getGameData = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const operator = getRandomOperator();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = getCorrectAnswer(firstNumber, secondNumber, operator);

  return { answer, question };
};

const initGame = () => {
  startGame(getGameData, descriptionGame);
};

export default initGame;
