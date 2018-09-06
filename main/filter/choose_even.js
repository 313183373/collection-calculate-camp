'use strict';

function choose_even(collection) {
  return collection.filter((value) => (value & 1) === 0)
}

module.exports = choose_even;
