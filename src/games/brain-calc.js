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
      return 0;
  }
};

const mathOperators = '+-*';
const getRandomOperator = () => mathOperators[getRandomNumber(0, 2)];

const descriptionGame = 'What is the result of the expression?';

const brainCalc = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const operator = getRandomOperator();

  const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;
  const answer = getCorrectAnswer(firstNumber, secondNumber, operator);

  return { answer, question };
};

const initGame = () => {
  startGame(brainCalc, descriptionGame);
};

export default initGame;
