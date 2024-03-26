#!/usr/bin/env node
import getEvenQuestion from '../src/games/evenGame.js';
import gameProcess from '../src/index.js';
import gameInstructions from '../src/gamesInstructions.js';

const evenGameQuestion = getEvenQuestion;
const evenGameInstruction = gameInstructions['even'];
gameProcess(evenGameQuestion, evenGameInstruction);
