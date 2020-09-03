import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getCorrectAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const mathOperators = '+-*';
const getRandomOperator = () => mathOperators[getRandomNumber(0, mathOperators.length - 1)];

const descriptionGame = 'What is the result of the expression?';

const getGameData = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const operator = getRandomOperator();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = getCorrectAnswer(firstNumber, secondNumber, operator).toString();

  return { answer, question };
};

const startEngine = () => {
  startGame(getGameData, descriptionGame);
};

export default startEngine;
