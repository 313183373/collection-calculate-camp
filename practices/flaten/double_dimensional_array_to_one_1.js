'use strict';

function double_to_one(collection) {
  let ans=[];
  for(let i in collection){
    if(typeof(collection[i])=="object"){
      for(let j in collection[i]){
        ans.push(collection[i][j]);
      }
    }else{
      ans.push(collection[i]);
    }
  }
  return ans;
}

module.exports = double_to_one;
