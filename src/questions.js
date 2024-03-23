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
  progressionGameQuestion: function getQuestionsAboutprogression() {
    const fitrstNum = _.random(1, 20);
    const coefficient = _.random(1, 10);
    const progression = [];

    // 10 bc progression includes only 10 numbers
    for (let i = 0; i < 10; i += 1) {
      progression.push(fitrstNum + coefficient * i);
    }

    // same
    const index = _.random(0, 9);
    const hiddenNumber = progression[index];
    progression[index] = '..';

    return {
      question: progression.join(' '),
      correctAnswer: `${hiddenNumber}`,
    };
  },
  primeGameQuestion: function GgetQuestionsAboutPrimeNumber() {
    const value = _.random(1, 100);

    function doesNumIsPrime(val) {
      if ([2, 3, 5].includes(val)) {
        return 'yes';
      }
      if (val === 1) {
        return 'no';
      }
      if (val % 2 === 0 || val % 3 === 0 || val % 5 === 0) {
        return 'no';
      }
      return 'yes';
    }

    return {
      question: value,
      correctAnswer: doesNumIsPrime(value),
    };
  },
};

export default questions;
