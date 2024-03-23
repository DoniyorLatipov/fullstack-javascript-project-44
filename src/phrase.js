import { question } from 'readline-sync';

const phrases = {
  // *** introduction ***
  welcome: function sayWelcome() {
    console.log('Welcome to the Brain Games!');
  },
  getName: function askName() {
    return question('May I have your name? ');
  },
  sayHi: function sayHelloByName(name) {
    console.log(`Hello, ${name}!`);
  },
  // *** games instuction ***
  evenGameInstruction: function sayHowToPlayBrainEven() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  },
  calcGameInstruction: function sayHowToPlayBrainCalc() {
    console.log('What is the result of the expression?');
  },
  gcdGamenstruction: function sayHowToPlayBrainGcd() {
    console.log('Find the greatest common divisor of given numbers.');
  },
  // *** game mechanics ***
  askQuestion: function askQuestion(questionText) {
    console.log(`Question: ${questionText}`);
  },
  getAnswer: function askYourAnswer() {
    return question('Your answer: ');
  },
  correct: function sayCorrect() {
    console.log('Correct!');
  },
  // *** ending ***
  youLoss: function sayLossPhrase(currect, yourAnswer, name) {
    console.log(
      `'${yourAnswer}' is wrong answer ;(. Correct answer was '${currect}'.`,
      `\nLet's try again, ${name}!`,
    );
  },
  youWin: function congratulations(name) {
    console.log(`Congratulations, ${name}!`);
  },
};

export default phrases;
