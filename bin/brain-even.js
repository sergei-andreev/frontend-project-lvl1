#!/usr/bin/env node

import { greeting, brainEven } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const playerName = greeting();

brainEven(playerName);
