import _ from 'lodash';

const questions = {
  evenGameQuestion: function () {
    const questionNumber = _.random(1, 20);

    return {
      question: questionNumber,
      correctAnswer: `${questionNumber % 2 === 0 ? 'yes' : 'no'}`,
    };
  },
  calcGameQuestion: function () {
    const operators = ['+', '-', '*'];
    const num1 = _.random(1, 20);
    const num2 = _.random(1, 20);
    const currentOperator = operators[_.random(0, operators.length - 1)];

    return {
      question: `${num1} ${currentOperator} ${num2}`,
      correctAnswer: eval(`${num1} ${currentOperator} ${num2}`),
    };
  },
};

export default questions;
