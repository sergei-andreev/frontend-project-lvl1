import readlineSync from 'readline-sync';
import startGame from '../index.js'

const isEven = (number) => (number % 2 === 0);
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const getRandomNumber = () => Math.floor(Math.random() * 100);

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
    const number = getRandomNumber();
    const answer = getCorrectAnswer(number);

    console.log(`Question: ${number}`);
    const playerAnswer = (readlineSync.question('Your answer: ')).toLowerCase();

    if (answer === playerAnswer) {
        return 'win';
    } else {
        console.log(`"${playerAnswer}" is wrong answer ;(.Correct answer was "${answer}".`);
        return 'defeat';
    }
}

export default startGame(brainEven, descriptionGame);
