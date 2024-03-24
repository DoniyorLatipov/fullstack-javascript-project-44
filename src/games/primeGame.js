import _ from 'lodash';

function getPrimeQuestion() {
  // random number from 1 to 100 for prime game
  const value = _.random(1, 100);

  function doesItPrime(val) {
    if (val === 1) {
      return 'no';
    }
    if ([2, 3, 5, 7].includes(val)) {
      return 'yes';
    }

    // we start with 2 because all numbers are divisible by 1
    for (let i = 2; i <= Math.sqrt(val); i += 1) {
      if (val % i === 0) {
        return 'no';
      }
    }

    return 'yes';
  }

  return {
    question: value,
    correctAnswer: `${doesItPrime(value)}`,
  };
}

export default getPrimeQuestion;
