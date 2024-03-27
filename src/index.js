import sayHelloByName from './cli.js';
import phrases from './phrase.js';

// the game lasts until three correct answers
const roundsCount = 3;
function gameProcess(getAssets, gameInstruction) {
  const name = sayHelloByName();
  console.log(gameInstruction);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getAssets();
    phrases.askQuestion(question);
    const yourAnswer = phrases.getAnswer();

    if (correctAnswer === yourAnswer) {
      phrases.correct();
    } else {
      phrases.youLoss(correctAnswer, yourAnswer, name);
      return;
    }
  }

  phrases.youWin(name);
}

export default gameProcess;
