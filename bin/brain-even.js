#!/usr/bin/env node

import { greeting } from '../src/index.js';
import { brainEven } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const playerName = greeting();

brainEven(playerName);
