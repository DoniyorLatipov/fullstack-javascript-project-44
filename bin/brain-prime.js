#!/usr/bin/env node
import getPrimeQuestion from '../src/games/primeGame.js';
import gameProcess from '../src/index.js';
import gameInstructions from '../src/gamesInstructions.js';

const primeGameQuestion = getPrimeQuestion;
const primeGameInstruction = gameInstructions('prime');
gameProcess(primeGameQuestion, primeGameInstruction);
