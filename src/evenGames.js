import _ from 'lodash';
import sayLossPhrase from './sayLossPhrase.js';
import { question } from 'readline-sync';

function gameProcess(name) {
  let count = 0;

  while (count < 3) {
    const questionNumber = _.random(1, 20);
    console.log(`Question: ${questionNumber}`);
    const yourAnswer = question('Your answer: ');
    const correctAnswer = `${questionNumber % 2 === 0 ? 'yes' : 'no'}`;

    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(sayLossPhrase(correctAnswer, yourAnswer, name));
      process.exit(1);
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default gameProcess;
