import sayHelloByName from './gameIntroduction.js';
import phrases from './phrase.js';
import gameQuestions from './questions.js';

function gameProcess(gameName) {
  const name = sayHelloByName();
  phrases[`${gameName}GameInstruction`]();

  let score = 0;

  while (score < 3) {
    const { question, correctAnswer } = gameQuestions[`${gameName}GameQuestion`]();
    phrases.askQuestion(question);
    const yourAnswer = phrases.getAnswer();

    if (correctAnswer === yourAnswer) {
      phrases.correct();
      score += 1;
    } else {
      phrases.youLoss(correctAnswer, yourAnswer, name);
      break;
    }
  }

  if (score === 3) {
    phrases.youWin(name);
  }
}

export default gameProcess;
