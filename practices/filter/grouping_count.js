'use strict';

function grouping_count(collection) {
  let map={};
  for(let i=0;i<collection.length;i++){
    if(typeof(map[collection[i]])=="undefined"){
      map[collection[i]]=1;
    }else{
      map[collection[i]]++;
    }
  }
  return map;
}

module.exports = grouping_count;
