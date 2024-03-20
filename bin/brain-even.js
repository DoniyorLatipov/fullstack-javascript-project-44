#!/usr/bin/env node
import sayHelloByName from '../src/askNameSayHello.js';
import gameProcess from '../src/evenGames.js';

console.log('Welcome to the Brain Games');
const name = sayHelloByName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

gameProcess(name);
