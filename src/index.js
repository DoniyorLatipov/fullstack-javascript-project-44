import sayHelloByName from './cli.js';
import phrases from './phrase.js';

function gameProcess(getAssets, gameInstruction) {
  const name = sayHelloByName();
  console.log(gameInstruction);

  let score = 0;

  while (score < 3) {
    const { question, correctAnswer } = getAssets();
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
