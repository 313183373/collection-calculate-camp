'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(function(value,index,arr){
    return value%2==1;
  }).map(function(value,index,arr){
    return value*3+2;
  })
}

module.exports = hybrid_operation_to_uneven;

