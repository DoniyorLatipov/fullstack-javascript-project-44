#!/usr/bin/env node
import getCalcAssets from '../src/games/calcGame.js';
import gameProcess from '../src/index.js';

const calcGameAssets = getCalcAssets();
gameProcess(calcGameAssets);
