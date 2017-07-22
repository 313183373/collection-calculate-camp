'use strict';

function choose_multiples_of_three(collection) {
  let ans=[];
  for(let i=0;i<collection.length;i++){
    if(collection[i]%3==0){
      ans.push(collection[i]);
    }
  }
  return ans;
}

module.exports = choose_multiples_of_three;
