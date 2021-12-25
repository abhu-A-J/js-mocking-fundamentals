/**
 * Monkey patching the thumWar function to always return the same result
 * Execute: Use `npx jest --watch ./src/no-framework/monkey-patching.js` to watch the test
 */

const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const originalGetWinner = utils.getWinner;

utils.getWinner = (player1, player2) => player1;

// monkey patch to always return 'A.J. as the winner of the thumb war'
const winner = thumbWar('A.J.', 'Abhushan Joshi');
assert.strictEqual(winner, 'A.J.');

// Your code:
// cleanup

utils.getWinner = originalGetWinner;
