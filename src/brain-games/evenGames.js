import _ from 'lodash';
import { question } from 'readline-sync';
import ckeckAnswer from '../answerCheck.js';

function gameProcess(name) {
  let score = 0;

  while (score < 3) {
    const questionNumber = _.random(1, 20);
    console.log(`Question: ${questionNumber}`);
    const yourAnswer = question('Your answer: ');
    const correctAnswer = `${questionNumber % 2 === 0 ? 'yes' : 'no'}`;

    ckeckAnswer(correctAnswer, yourAnswer, score, name);
  }

  console.log(`Congratulations, ${name}!`);
}

export default gameProcess;
