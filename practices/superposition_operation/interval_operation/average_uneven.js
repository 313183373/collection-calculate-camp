'use strict';

function average_uneven(collection) {
  let collect=collection.filter(function (value,index,arr){
    return value>=1&&value<=10&&value%2==1;
  });
  let ans= collect.reduce(function (pre,now,arr){
    return pre+now;
  });
  return ans/collect.length;
}

module.exports = average_uneven;
