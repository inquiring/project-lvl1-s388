import { cons } from 'hexlet-pairs';
import startGame from '../startGame';
import getRandomNum from '../utils';

const operationsMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getGameData = () => {
  const firstOperand = getRandomNum(1, 10);
  const secondOperand = getRandomNum(1, 10);
  const operations = Object.keys(operationsMap);
  const operation = operations[getRandomNum(0, operations.length - 1)];
  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const answer = `${operationsMap[operation](firstOperand, secondOperand)}`;

  return cons(question, answer);
};
export default () => startGame('What is the result of the expression?', getGameData);
