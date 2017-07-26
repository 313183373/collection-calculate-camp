'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let ans=Array.from(collection_a);
  for(let i=0;i<ans.length;i++){
    if(collection_b.includes(ans[i])){
      ans.splice(i,1);
      i--;
    }
  }
  return ans;
}

module.exports = choose_no_common_elements;
