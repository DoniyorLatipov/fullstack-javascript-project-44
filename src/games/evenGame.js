import _ from 'lodash';

function getEvenQuestion() {
  const questionNumber = _.random(1, 20);

  return {
    question: questionNumber,
    correctAnswer: `${questionNumber % 2 === 0 ? 'yes' : 'no'}`,
  };
}

export default getEvenQuestion;
