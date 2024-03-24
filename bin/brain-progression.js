#!/usr/bin/env node
import getProgressionQuestion from '../src/games/primeGame.js';
import gameProcess from '../src/index.js';
import gameInstructions from '../src/gamesInstructions.js';

const progressionGameQuestion = getProgressionQuestion;
const progressionGameInstruction = gameInstructions('progression');
gameProcess(progressionGameQuestion, progressionGameInstruction);
