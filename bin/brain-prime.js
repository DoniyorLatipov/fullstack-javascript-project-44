#!/usr/bin/env node
import getPrimeAssets from '../src/games/primeGame.js';
import gameProcess from '../src/index.js';

const primeGameAssets = getPrimeAssets();
gameProcess(primeGameAssets);
