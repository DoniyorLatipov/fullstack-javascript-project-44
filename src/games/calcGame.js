import _ from 'lodash';

import runEngine from '../index.js';
import gameInstructions from '../gamesInstructions.js';

function calc(number1, number2, operator) {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
}

function getCalcQuestion() {
  const operators = ['+', '-', '*'];
  const num1 = _.random(1, 20);
  const num2 = _.random(1, 20);
  const currentOperator = operators[_.random(0, operators.length - 1)];

  return {
    question: `${num1} ${currentOperator} ${num2}`,
    correctAnswer: `${calc(num1, num2, currentOperator)}`,
  };
}

export default function runCalcGame() {
  runEngine(getCalcQuestion, gameInstructions.calc);
}
