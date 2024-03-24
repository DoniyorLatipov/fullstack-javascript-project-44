import _ from 'lodash';

function getProgressionQuestion() {
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
}

export default getProgressionQuestion;
