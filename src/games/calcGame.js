import _ from 'lodash';

function getCalcQuestion() {
  const operators = ['+', '-', '*'];
  const num1 = _.random(1, 20);
  const num2 = _.random(1, 20);
  const currentOperator = operators[_.random(0, operators.length - 1)];

  function calc(number1, number2, operator) {
    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      default:
        return null;
    }
  }

  return {
    question: `${num1} ${currentOperator} ${num2}`,
    correctAnswer: `${calc(num1, num2, currentOperator)}`,
  };
}

export default getCalcQuestion;
