import { cons } from 'hexlet-pairs';
import startGame from '../startGame';
import getRandomNum from '../getRandomNum';

const operationsMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const calcGame = () => {
  const getGameData = () => {
    const firstOperand = getRandomNum(1, 100);
    const secondOperand = getRandomNum(1, 100);
    const operations = Object.keys(operationsMap);
    const operation = operations[getRandomNum(0, operations.length)];
    const question = `${firstOperand} ${operation} ${secondOperand}`;
    const answer = `${operationsMap[operation](firstOperand, secondOperand)}`;
    return cons(question, answer);
  };
  startGame({
    instruction: 'What is the result of the expression?',
    getGameData,
  });
};

export default calcGame;
