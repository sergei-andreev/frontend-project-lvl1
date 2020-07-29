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
const getRandomOperator = () => mathOperators[getRandomNumber(3)];

const descriptionGame = 'What is the result of the expression?';
const numberOfRounds = 3;

const brainCalc = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = getRandomOperator();

  const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;
  const answer = getCorrectAnswer(firstNumber, secondNumber, operator);

  return { answer, question };
};

const initGame = () => {
  startGame(brainCalc, descriptionGame, numberOfRounds);
};

export default initGame;
