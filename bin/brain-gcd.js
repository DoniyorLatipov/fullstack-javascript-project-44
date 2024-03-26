#!/usr/bin/env node
import getGcdQuestion from '../src/games/gcdGame.js';
import gameProcess from '../src/index.js';
import gameInstructions from '../src/gamesInstructions.js';

const gcdGameQuestion = getGcdQuestion;
const gcdGameInstruction = gameInstructions['gcd'];
gameProcess(gcdGameQuestion, gcdGameInstruction);
