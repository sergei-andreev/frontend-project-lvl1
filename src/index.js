import readlineSync from 'readline-sync';

export const greeting = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  return (playerName)
};

export const brainEven = (playerName) => {
  const isEven = (number) => number % 2 === 0;
  const correctAnswer = (number) => isEven(number) ? 'yes' : 'no';

  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const answer = correctAnswer(number);
    
    console.log(`Question: ${number}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (answer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(.Correct answer was "${answer}".`)
      console.log(`Let's try again, ${playerName}!`)
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`)
}
