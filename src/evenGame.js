import readlineSync from 'readline-sync';
import greeting from './greeting';
import getRandomNum from './getRandomNum';

const maxIterCount = 3;
const evenGame = () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  const evenGameIter = (iterCount) => {
    if (iterCount === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const randomNumber = getRandomNum(1, 100);
    readlineSync.question(`Question: ${randomNumber}`);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      evenGameIter(iterCount - 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  evenGameIter(maxIterCount);
};

export default evenGame;
