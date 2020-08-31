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
      result = String(nextValue);
      progressionArr.push('..');
    } else {
      progressionArr.push(nextValue);
    }
  }

  return [progressionArr.join(' '), result];
};

const descriptionGame = 'What number is missing in the progression?';

const getGameData = () => {
  const [progression, answer] = getProgression();
  const question = progression;

  return { answer, question };
};

const initGame = () => {
  startGame(getGameData, descriptionGame);
};

export default initGame;
