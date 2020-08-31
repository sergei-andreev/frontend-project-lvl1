const getRandomNumber = (startNumber, finishNumber) => {
  const amountNumbers = (finishNumber - startNumber) + 1;
  return startNumber + Math.floor(Math.random() * amountNumbers);
};

export default getRandomNumber;
