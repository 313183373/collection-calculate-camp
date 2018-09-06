'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter((value) => (value & 1) === 1).map((value) => value * 3 + 5).reduce((pre, now) => pre + now);
}

module.exports = hybrid_operation_to_uneven;

