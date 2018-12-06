import readlineSync from 'readline-sync';
import { car, cdr, toString } from 'hexlet-pairs';

const maxIterCount = 3;
const startGame = ({ instruction, getGameData }) => {
  console.log('Welcome to the Brain Games!');
  console.log(instruction);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  const gameIter = (iterCount) => {
    if (iterCount === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const gameData = getGameData();
    console.log(toString(gameData));
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    readlineSync.question(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      gameIter(iterCount - 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  return gameIter(maxIterCount);
};

export default startGame;
