'use strict';
function map_to_even(collection){
  let ans=[];
  for(let i in collection){
    ans.push(collection[i]*2);
  }
  return ans;
}
module.exports = map_to_even;
