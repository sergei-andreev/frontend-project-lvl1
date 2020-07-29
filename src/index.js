import readlineSync from 'readline-sync';

const startGame = (game, descriptionGame, numberOfRounds) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);

  console.log(descriptionGame);

  for (let currentRound = 1; currentRound <= numberOfRounds; currentRound += 1) {
    const { answer, question } = game();

    console.log(question);
    const playerAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (String(playerAnswer) === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
