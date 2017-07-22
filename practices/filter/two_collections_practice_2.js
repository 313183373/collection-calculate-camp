'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let ans=[];
  for(let i=0;i<collection_a.length;i++){
    if(collection_b.indexOf(collection_a[i])==-1){
      ans.push(collection_a[i]);
    }
  }
  for(let i=0;i<collection_b.length;i++){
    if(collection_a.indexOf(collection_b[i])==-1){
      ans.push(collection_b[i]);
    }
  }
  return ans;
}

module.exports = choose_no_common_elements;
