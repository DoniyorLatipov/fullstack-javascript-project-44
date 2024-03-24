import phrases from './phrase.js';

function gameEntry() {
  phrases.welcome();
  const name = phrases.getName();
  phrases.sayHi(name);
  return name;
}

export default gameEntry;
