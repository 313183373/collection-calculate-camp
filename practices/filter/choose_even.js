'use strict';

function choose_even(collection) {
  let ans=[];
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      ans.push(collection[i]);
    }
  }
  return ans;
}

module.exports = choose_even;
