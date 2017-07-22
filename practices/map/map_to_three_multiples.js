'use strict';
var map_to_three_multiples = function(collections){
  let ans=[];
  for(let i in collections){
    ans.push(collections[i]*3);
  }
  return ans;
  
};

module.exports = map_to_three_multiples;
