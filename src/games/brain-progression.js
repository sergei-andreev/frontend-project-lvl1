import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = () => {
  const startValue = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 10);
  const hideElement = getRandomNumber(0, 10);
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
  const question = `Question: ${progression}`;

  return { answer, question };
};

const initGame = () => {
  startGame(brainProgression, descriptionGame);
};

export default initGame;
