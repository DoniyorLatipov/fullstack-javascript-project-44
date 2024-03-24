import _ from 'lodash';

function getEvenAssets() {
  return {
    getInstruction: function getEvenGameInstruction() {
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    },
    getQuestion: function createEvenGameQuestion() {
      const questionNumber = _.random(1, 20);

      return {
        question: questionNumber,
        correctAnswer: `${questionNumber % 2 === 0 ? 'yes' : 'no'}`,
      };
    },
  };
}

export default getEvenAssets;
