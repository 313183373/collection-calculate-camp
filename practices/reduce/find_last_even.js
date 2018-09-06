'use strict';

function find_last_even(collection) {
  return collection.reverse().find(function (value) {
    return (value & 1) === 0;
  });
}

module.exports = find_last_even;
