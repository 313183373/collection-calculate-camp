'use strict';

function compute_chain_median(collection) {
  let ans;
  let a = collection.split('->').map((value) => value * 1).sort((a, b) => a - b);
  while (a.length > 2) {
    a.pop();
    a.shift();
  }
  ans = a.reduce((pre, now) => pre + now) / a.length;
  return ans;
}

module.exports = compute_chain_median;
