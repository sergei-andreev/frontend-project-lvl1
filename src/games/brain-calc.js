import readlineSync from 'readline-sync';
import startGame from '../index.js'

const getCorrectAnswer = (firstNumber, secondNumber, operator) => {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
    }
}
const getRandomNumber = () => Math.floor(Math.random() * 10);
const getRandomOperator= () => '+-*'[Math.floor(Math.random() * 3)];

const descriptionGame = 'What is the result of the expression?';

const brainCalc = () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const operator = getRandomOperator();
    const answer = getCorrectAnswer(firstNumber, secondNumber, operator);

    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
    const playerAnswer = (readlineSync.question('Your answer: ')).toLowerCase();

    if (answer === Number(playerAnswer)) {
        return 'win';
    } else {
        console.log(`"${playerAnswer}" is wrong answer ;(.Correct answer was "${answer}".`);
        return 'defeat';
    }
}

export default startGame(brainCalc, descriptionGame);
