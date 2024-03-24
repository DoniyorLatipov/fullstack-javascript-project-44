#!/usr/bin/env node
import getCalcQuestion from '../src/games/calcGame.js';
import gameProcess from '../src/index.js';
import gameInstructions from '../src/gamesInstructions.js';

const calcGameQuestion = getCalcQuestion;
const calcGameInstruction = gameInstructions('cacl');
gameProcess(calcGameQuestion, calcGameInstruction);
