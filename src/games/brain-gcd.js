import readlineSync from 'readline-sync';
import startGame from '../index.js';

const getCorrectAnswer = (firstNumber, secondNumber) => {
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
const getRandomNumber = () => Math.floor(Math.random() * 100);

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const brainCalc = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const answer = getCorrectAnswer(firstNumber, secondNumber);

  console.log(`Question: ${firstNumber} ${secondNumber} (${answer})`);
  const playerAnswer = (readlineSync.question('Your answer: ')).toLowerCase();

  if (answer === Number(playerAnswer)) {
    return 'win';
  }

  console.log(`"${playerAnswer}" is wrong answer ;(.Correct answer was "${answer}".`);
  return 'defeat';
};

export default startGame(brainCalc, descriptionGame);
