import readlineSync from 'readline-sync';

const askForANameAndSayHello = () => {
  // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export default askForANameAndSayHello;
