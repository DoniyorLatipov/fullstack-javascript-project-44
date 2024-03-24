#!/usr/bin/env node
import getProgressionAssets from '../src/games/primeGame.js';
import gameProcess from '../src/index.js';

const progressionGameAssets = getProgressionAssets();
gameProcess(progressionGameAssets);
