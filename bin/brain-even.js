#!/usr/bin/env node
import getEvenAssets from '../src/games/evenGame.js';
import gameProcess from '../src/index.js';

const evenGameAssets = getEvenAssets();
gameProcess(evenGameAssets);
