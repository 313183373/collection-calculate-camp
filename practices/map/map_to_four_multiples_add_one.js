'use strict';
var map_to_four_multiples_add_one = function(collection){
  let ans=[];
  for(let i in collection){
    ans.push(collection[i]*4+1);
  }
  return ans;
};

module.exports = map_to_four_multiples_add_one;
