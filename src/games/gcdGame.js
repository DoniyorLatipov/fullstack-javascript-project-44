import _ from 'lodash';

function getGcdQuestion() {
  const num1 = _.random(1, 100);
  const num2 = _.random(1, 100);

  function gcd(val1, val2) {
    let number1 = val1 > val2 ? val1 : val2;
    let number2 = val1 > val2 ? val2 : val1;

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
}

export default getGcdQuestion;
