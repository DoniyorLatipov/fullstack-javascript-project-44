import { question } from 'readline-sync';

function sayHelloByName() {
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export default sayHelloByName;
