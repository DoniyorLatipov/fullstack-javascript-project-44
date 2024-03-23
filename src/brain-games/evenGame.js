import ckeckAnswer from '../answerCheck.js';
import phrases from '../phrase.js';
import gameQuestions from '../questions.js';

function gameProcess(name) {
  let score = 0;

  while (score < 3) {
    const { question, correctAnswer } = gameQuestions.evenGameQuestion();
    phrases.askQuestion(question);
    const yourAnswer = phrases.getAnswer();

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
