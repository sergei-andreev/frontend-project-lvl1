import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = () => {
  const startValue = getRandomNumber();
  const step = getRandomNumber();
  const hideElement = getRandomNumber();
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
const numberOfRounds = 3;

const brainProgression = () => {
  const [progression, answer] = getProgression();
  const question = `Question: ${progression}`;

  return { answer, question };
};

const initGame = () => {
  startGame(brainProgression, descriptionGame, numberOfRounds);
};

export default initGame;
