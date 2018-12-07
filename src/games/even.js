import { cons } from 'hexlet-pairs';
import startGame from '../startGame';
import getRandomNum from '../utils';

const isEven = number => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => startGame('Answer "yes" if number even otherwise answer "no".', getGameData);
