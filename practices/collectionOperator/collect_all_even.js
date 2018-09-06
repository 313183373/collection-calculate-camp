'use strict';

function collect_all_even(collection) {
  return collection.filter((value) => (value & 1) === 0);
}

module.exports = collect_all_even;
