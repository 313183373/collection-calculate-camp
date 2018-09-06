'use strict';

function grouping_count(collection) {
  return collection.reduce((pre, now) => {
    if (!pre[now]) {
      pre[now] = 1;
    } else {
      pre[now]++;
    }
    console.log(pre);
    return pre;
  }, {})
}

module.exports = grouping_count;
