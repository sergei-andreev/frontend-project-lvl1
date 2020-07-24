import readlineSync from 'readline-sync';
import startGame from '../index.js';

const isPrime = (number) => {
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  return false;
};
const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');
const getRandomNumber = () => Math.floor(Math.random() * 100);

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const number = getRandomNumber();
  const answer = getCorrectAnswer(number);

  console.log(`Question: ${number}`);
  const playerAnswer = (readlineSync.question('Your answer: ')).toLowerCase();

  if (answer === playerAnswer) {
    return 'win';
  }

  console.log(`"${playerAnswer}" is wrong answer ;(.Correct answer was "${answer}".`);
  return 'defeat';
};

export default startGame(brainPrime, descriptionGame);
