import _ from 'lodash';

import runEngine from '../index.js';
import gamesInstructions from '../gamesInstructions.js';

function getEvenQuestion() {
  const questionNumber = _.random(1, 20);

  return {
    question: questionNumber,
    correctAnswer: `${questionNumber % 2 === 0 ? 'yes' : 'no'}`,
  };
}

export default function runEvenGame() {
  runEngine(getEvenQuestion, gamesInstructions.even);
}
