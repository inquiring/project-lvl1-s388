import { cons } from 'hexlet-pairs';
import startGame from '../startGame';
import getRandomNum from '../utils';

const addNumberToSequance = (sequance, maxSequanceLength, step) => {
  if (sequance.length === maxSequanceLength) {
    return sequance;
  }
  const lastElem = sequance[sequance.length - 1];
  const nextElem = lastElem + step;
  return addNumberToSequance([...sequance, nextElem], maxSequanceLength, step);
};

const getRandomProgression = () => {
  const progressionLength = 10;
  const firstElement = getRandomNum(1, 10);
  const step = getRandomNum(1, 10);

  return addNumberToSequance([firstElement], progressionLength, step);
};

const getGameData = () => {
  const sequance = getRandomProgression();
  const hiddenElementPosition = getRandomNum(0, sequance.length - 1);
  const question = sequance.map((elem, index) => (index === hiddenElementPosition ? '..' : elem)).join(' ');
  const answer = `${sequance[hiddenElementPosition]}`;
  return cons(question, answer);
};

export default () => startGame('What number is missing in the progression?', getGameData);
