'use strict';

function double_to_one(collection) {
  let ans=[];
  for(let i in collection){
    if(typeof(collection[i])=="object"){
      for(let j in collection[i]){
        if(ans.indexOf(collection[i][j])==-1){
          ans.push(collection[i][j]);
        }
      }
    }else{
      if(ans.indexOf(collection[i])){
        ans.push(collection[i]);
      }
    }
  }
  return ans;
}

module.exports = double_to_one;
