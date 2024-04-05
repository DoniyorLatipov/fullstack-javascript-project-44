import _ from 'lodash';

import runEngine from '../index.js';
import gameInstructions from '../gamesInstructions.js';

function getProgressionQuestion() {
  const fitrstNum = _.random(1, 20);
  const coefficient = _.random(1, 10);
  const progression = [];

  for (let i = 0; i < 10; i += 1) {
    progression.push(fitrstNum + coefficient * i);
  }

  const index = _.random(0, 9);
  const hiddenNumber = progression[index];
  progression[index] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: `${hiddenNumber}`,
  };
}

export default function runProgressionGame() {
  runEngine(getProgressionQuestion, gameInstructions.progression);
}
