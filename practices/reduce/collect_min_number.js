'use strict';

function collect_min_number(collection) {
  return collection.reduce((pre,now,arr)=>pre=now<pre?now:pre);
}

module.exports = collect_min_number;

