import _ from 'lodash';

const questions = {
  evenGameQuestion: function getQuestionsAboutEven() {
    const questionNumber = _.random(1, 20);

    return {
      question: questionNumber,
      correctAnswer: `${questionNumber % 2 === 0 ? 'yes' : 'no'}`,
    };
  },
  calcGameQuestion: function getQuestionsAboutCalc() {
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
  },
  gcdGameQuestion: function getQuestionsAboutGcd() {
    const num1 = _.random(1, 100);
    const num2 = _.random(1, 100);

    function gcd(val1, val2) {
      let number1 = val1;
      let number2 = val2;

      if (number2 > number1) {
        const temp = number1;
        number1 = number2;
        number2 = temp;
      }

      while (number2 !== 0) {
        const temp = number1;
        number1 = number2;
        number2 = temp % number2;
      }

      return number1;
    }

    return {
      question: `${num1} ${num2}`,
      correctAnswer: `${gcd(num1, num2)}`,
    };
  },
};

export default questions;
