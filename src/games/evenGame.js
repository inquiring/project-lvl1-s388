import { cons } from 'hexlet-pairs';
import startGame from '../startGame';
import getRandomNum from '../getRandomNum';


const evenGame = () => {
  const getGameData = () => {
    const question = getRandomNum(1, 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return cons(question, answer);
  };
  startGame({
    instruction: 'Answer "yes" if number even otherwise answer "no".',
    getGameData,
  });
};

export default evenGame;
