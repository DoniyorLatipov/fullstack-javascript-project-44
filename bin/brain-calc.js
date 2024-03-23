#!/usr/bin/env node
import sayHelloByName from '../src/gameIntroduction.js';
import gameProcess from '../src/brain-games/calcGame.js';
import phrases from '../src/phrase.js';

const name = sayHelloByName();
phrases.calcGameInstruction();
gameProcess(name);
