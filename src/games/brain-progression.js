import readlineSync from 'readline-sync';
import startGame from '../index.js';

const getProgression = () => {
  const startValue = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);
  const hideElement = Math.floor(Math.random() * 10);
  const progressionArr = [];
  let result;

  for (let i = 0; i < 10; i += 1) {
    const nextValue = startValue + (step * i);

    if (hideElement === i) {
      result = nextValue;
      progressionArr.push('..');
    } else {
      progressionArr.push(nextValue);
    }
  }

  return [progressionArr.join(' '), result];
};

const descriptionGame = 'What number is missing in the progression?';

const brainProgression = () => {
  const [progression, answer] = getProgression();

  console.log(`Question: ${progression}`);
  const playerAnswer = (readlineSync.question('Your answer: ')).toLowerCase();

  if (answer === Number(playerAnswer)) {
    return 'win';
  }

  console.log(`"${playerAnswer}" is wrong answer ;(.Correct answer was "${answer}".`);
  return 'defeat';
};

export default startGame(brainProgression, descriptionGame);
