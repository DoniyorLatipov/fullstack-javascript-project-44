#!/usr/bin/env node
import getGcdAssets from '../src/games/gcdGame.js';
import gameProcess from '../src/index.js';

const gcdGameAssets = getGcdAssets();
gameProcess(gcdGameAssets);
