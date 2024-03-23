import { question } from 'readline-sync';

const phrases = {
  //*** introduction ***
  welcome: function () {
    console.log('Welcome to the Brain Games!');
  },
  getName: function () {
    return question('May I have your name? ');
  },
  sayHi: function (name) {
    console.log(`Hello, ${name}!`);
  },
  //*** games instuction ***
  evenGameInstruction: function () {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  },
  // *** game mechanics ***
  askQuestion: function (question) {
    console.log(`Question: ${question}`);
  },
  getAnswer: function () {
    return question('Your answer: ');
  },
  correct: function () {
    console.log('Correct!');
  },
  // *** ending ***
  sayLossPhrase: function (currect, yourAnswer, name) {
    console.log(
      `'${yourAnswer}' is wrong answer ;(. Correct answer was '${currect}'. \nLet's try again, ${name}!`
    );
  },
  congratulations: function (name) {
    console.log(`Congratulations, ${name}!`);
  },
};

export default phrases;
