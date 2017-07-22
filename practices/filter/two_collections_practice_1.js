'use strict';

function choose_common_elements(collection_a, collection_b) {
  let ans=[];
  for(let i=0;i<collection_a.length;i++){
    if(collection_b.indexOf(collection_a[i])!=-1){
      ans.push(collection_a[i]);
    }
  }
  return ans;
}

module.exports = choose_common_elements;
