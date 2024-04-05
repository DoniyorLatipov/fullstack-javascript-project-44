import _ from 'lodash';

import runEngine from '../index.js';
import gameInstructions from '../gamesInstructions.js';

function doesItPrime(val) {
  if (val < 2) {
    return false;
  }

  // we start with 2 because all numbers are divisible by 1
  for (let i = 2; i <= Math.sqrt(val); i += 1) {
    if (val % i === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeQuestion() {
  const value = _.random(1, 100);
  const text = doesItPrime(value) ? 'yes' : 'no';

  return {
    question: value,
    correctAnswer: text,
  };
}

export default function runPrimeGame() {
  runEngine(getPrimeQuestion, gameInstructions.prime);
}
