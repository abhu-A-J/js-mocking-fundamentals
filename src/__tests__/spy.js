/**
 * With our current usage of the mock function,
 * we have to manually keep track of the original
 * implementation so we can clean up after
 * ourselves to keep our tests idempotent. Let’s
 * see how jest.spyOn can help us avoid the
 * bookkeeping and simplify our situation.
 *
 * Task: use `spyOn` to replace `fn`
 *
 * Execute: Use `npx jest --watch src/__tests__/spy.js` to watch the test
 */

const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner');
  utils.getWinner.mockImplementation((p1, p2) => p1);

  // utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar('AJ', 'Abhushan');
  expect(winner).toBe('AJ');

  // cover all cases
  expect(utils.getWinner.mock.calls).toEqual([
    ['AJ', 'Abhushan'],
    ['AJ', 'Abhushan'],
  ]);

  // cleanup
  // utils.getWinner = originalGetWinner;
  utils.getWinner.mockRestore();
});

/**
 * Hints:
 * - https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname
 *
 * Checkout master branch to see the answer.
 */
