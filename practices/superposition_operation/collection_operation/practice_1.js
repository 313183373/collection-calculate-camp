'use strict';

function hybrid_operation(collection) {
  return collection.map(function(value,index,arr){
    return value*3+2;
  }).reduce(function(pre,current,arr){
    return pre+current;
  });
}

module.exports = hybrid_operation;

