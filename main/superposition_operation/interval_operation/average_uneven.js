'use strict';

function average_uneven(collection) {
  let a = collection.filter((value) => value >= 1 && value <= 10 && (value & 1) === 1);
  return a.reduce((pre, now) => pre + now) / a.length;
}

module.exports = average_uneven;
