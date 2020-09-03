import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const PROGRESSION_LENGTH = 10;

const getProgression = (startValue, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(startValue + (step * i));
  }

  return progression;
};

const descriptionGame = 'What number is missing in the progression?';

const getGameData = () => {
  const startValue = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 10);
  const hiddenElement = getRandomNumber(0, PROGRESSION_LENGTH - 1);

  const progression = getProgression(startValue, step, PROGRESSION_LENGTH);
  const answer = progression[hiddenElement].toString();
  progression[hiddenElement] = '..';

  const question = progression.join(' ');

  return { answer, question };
};

const startEngine = () => {
  startGame(getGameData, descriptionGame);
};

export default startEngine;
