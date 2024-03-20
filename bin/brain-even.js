#!/usr/bin/env node
import sayHelloByName from '../src/brain-even/askNameSayHello.js';
import gameProcess from '../src/brain-even/evenGames.js';

console.log('Welcome to the Brain Games');
const name = sayHelloByName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

gameProcess(name);
