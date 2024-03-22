import { question } from 'readline-sync';

function gameEntry(game) {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  switch (game) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
  }

  return name;
}

export default gameEntry;
