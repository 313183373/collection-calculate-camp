'use strict';

function amount_even(collection) {
  return collection.filter(function (value,index,arr){
    return value>=1&&value<=10&&value%2==0;
  }).reduce(function (pre,now,arr){
    return pre+now;
  })
}

module.exports = amount_even;
