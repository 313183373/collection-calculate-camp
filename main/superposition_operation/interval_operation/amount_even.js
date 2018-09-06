'use strict';

function amount_even(collection) {
  return collection.filter((value) => value >= 1 && value <= 10 && (value & 1) === 0).reduce((pre, now) => pre + now);
}

module.exports = amount_even;
