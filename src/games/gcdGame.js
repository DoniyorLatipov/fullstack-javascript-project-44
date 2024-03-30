import _ from 'lodash';

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

function getGcdQuestion() {
  // two randoms numbers from 1 to 100 for GCD game
  const num1 = _.random(1, 100);
  const num2 = _.random(1, 100);

  return {
    question: `${num1} ${num2}`,
    correctAnswer: `${gcd(num1, num2)}`,
  };
}

export default getGcdQuestion;
