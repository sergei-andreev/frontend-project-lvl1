import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const startGame = (getGameData, descriptionGame) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);

  console.log(descriptionGame);

  for (let currentRound = 1; currentRound <= numberOfRounds; currentRound += 1) {
    const { answer, question } = getGameData();

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (playerAnswer !== answer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
