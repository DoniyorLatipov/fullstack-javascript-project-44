import ckeckAnswer from '../answerCheck.js';
import phrases from '../phrase.js';

function gameProcess(name) {
  let score = 0;

  while (score < 3) {
    const questionNumber = _.random(1, 20);
    phrases.askQuestion(questionNumber);
    const yourAnswer = phrases.getAnswer();
    const correctAnswer = `${questionNumber % 2 === 0 ? 'yes' : 'no'}`;

    if (ckeckAnswer(correctAnswer, yourAnswer)) {
      phrases.correct();
      score += 1;
    } else {
      phrases.sayLossPhrase(correctAnswer, yourAnswer, name);
      break;
    }
  }

  if (score === 3) {
    phrases.congratulations(name);
  }
}

export default gameProcess;
