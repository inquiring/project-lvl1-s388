import { cons } from 'hexlet-pairs';
import startGame from '../startGame';
import getRandomNum from '../utils';

const getGreatestDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGreatestDivisor(b, a % b);
};

const getGameData = () => {
  const firstRundonNum = getRandomNum(1, 100);
  const secondRundomNum = getRandomNum(1, 100);
  const question = `${firstRundonNum} ${secondRundomNum}`;
  const answer = `${getGreatestDivisor(firstRundonNum, secondRundomNum)}`;

  return cons(question, answer);
};

export default () => startGame('Find the greatest common divisor of given numbers', getGameData);
