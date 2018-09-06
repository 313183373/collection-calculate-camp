'use strict';

function hybrid_operation(collection) {
  return collection.map((value) => value * 3 + 2).reduce((pre, now) => pre + now);
}

module.exports = hybrid_operation;

