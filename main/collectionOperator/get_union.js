'use strict';

function get_union(collection_a, collection_b) {
  let temp = collection_a.concat(collection_b);
  return Array.from(new Set(temp));
}

module.exports = get_union;

