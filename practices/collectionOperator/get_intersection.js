'use strict';

function get_intersection(collection_a, collection_b) {
  let ans=[];
  for(let i=0;i<collection_b.length;i++){
    if(collection_a.indexOf(collection_b[i])!=-1){
      ans.push(collection_b[i]);
    }
  }
  return ans;
}

module.exports = get_intersection;
