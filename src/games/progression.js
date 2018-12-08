import { cons } from 'hexlet-pairs';
import startGame from '../startGame';
import getRandomNum from '../utils';

const getSequance = (sequance, maxSequanceLength, step) => {
  if (sequance.length === maxSequanceLength) {
    return sequance;
  }
  const lastElem = sequance[sequance.length - 1];
  const nextElem = lastElem + step;
  return getSequance([...sequance, nextElem], maxSequanceLength, step);
};

const progressionLength = 10;

const getGameData = () => {
  const firstElementProgression = [getRandomNum(1, 10)];
  const stepProgression = getRandomNum(1, 10);
  const progression = getSequance(firstElementProgression, progressionLength, stepProgression);
  const hiddenElementPosition = getRandomNum(0, progression.length - 1);
  const question = progression.map((elem, index) => (index === hiddenElementPosition ? '..' : elem)).join(' ');
  const answer = `${progression[hiddenElementPosition]}`;

  return cons(question, answer);
};

export default () => startGame('What number is missing in the progression?', getGameData);
