import getPlayerName from './games/brain-games.js';

const startGame = (game, descriptionGame) => {
    const playerName = getPlayerName();
    const numberOfRounds = 3;
    
    console.log(descriptionGame);

    for (let currentRound = 1; currentRound < numberOfRounds; currentRound += 1) {
        let outGame = game();

        if (outGame === 'win') {
            console.log('Correct!')
        } else if (outGame === 'defeat') {
            console.log(`Let's try again, ${playerName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
