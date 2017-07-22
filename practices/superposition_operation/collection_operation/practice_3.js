'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(function(value,index,arr){
    return value%2==1;
  }).map(function(value,index,arr){
    return value*3+5;
  }).reduce(function(pre,now,arr){
    return pre+now;
  })
}

module.exports = hybrid_operation_to_uneven;

