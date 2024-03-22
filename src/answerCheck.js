import sayLossPhrase from '../sayLossPhrase.js';

function ckeckAnswer(correctAnswer, yourAnswer, score, name) {
  if (yourAnswer === correctAnswer) {
    console.log('Correct!');
    score += 1;
  } else {
    console.log(sayLossPhrase(correctAnswer, yourAnswer, name));
    process.exit(1);
  }
}

export default ckeckAnswer;
