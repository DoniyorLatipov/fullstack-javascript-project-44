#!/usr/bin/env node
import sayHelloByName from '../src/askNameSayHello.js';
import gameProcess from '../src/brain-games/evenGames.js';

const name = sayHelloByName();
gameProcess(name);
