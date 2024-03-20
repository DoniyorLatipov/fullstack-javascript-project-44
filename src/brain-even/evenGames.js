import _ from 'lodash';
import { question } from 'readline-sync';
import sayLossPhrase from '../sayLossPhrase.js';

function gameProcess(name) {
  let score = 0;

  while (score < 3) {
    const questionNumber = _.random(1, 20);
    console.log(`Question: ${questionNumber}`);
    const yourAnswer = question('Your answer: ');
    const correctAnswer = `${questionNumber % 2 === 0 ? 'yes' : 'no'}`;

    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(sayLossPhrase(correctAnswer, yourAnswer, name));
      process.exit(1);
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default gameProcess;
