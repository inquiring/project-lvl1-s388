import { cons } from 'hexlet-pairs';
import startGame from '../startGame';
import getRandomNum from '../utils';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (num, divider) => {
    if (num % divider === 0) {
      return false;
    }
    if (num / 2 <= divider) {
      return true;
    }
    return iter(number, divider + 1);
  };
  return iter(number, 2);
};

const getGameData = () => {
  const question = getRandomNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => startGame('Answer "yes" if given number is prime. Otherwise answer "no".', getGameData);
