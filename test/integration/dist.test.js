const assert = require('assert');

const sortFull = require('../../dist/sort');
const sortMin = require('../../dist/sort.min');

// Just sanity checks to ensure dist is not broken
// For more detail unit tests check sort.spec.js
function runTests(sort) {
  assert.deepEqual(sort([1, 4, 2]).asc(), [1, 2, 4]);
  assert.deepEqual(sort([1, 4, 2]).by({ asc: true }), [1, 2, 4]);
  assert.deepEqual(sort([1, 4, 2]).desc(), [4, 2, 1]);
  assert.deepEqual(sort([1, 4, 2]).by({ desc: true }), [4, 2, 1]);

  console.log('dist integration test success');
}

runTests(sortFull.sort);
runTests(sortMin.sort);
