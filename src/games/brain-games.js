import readlineSync from 'readline-sync';

export default () => {
    const welcomeText = 'Welcome to the Brain Games!';
    const askNameText = 'May I have your name? ';

    const playerName = readlineSync.question(`${welcomeText}\n${askNameText}`);
    console.log(`Hello, ${playerName}`);
    
    return (playerName);
};
