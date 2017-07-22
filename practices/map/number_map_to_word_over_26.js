'use strict';
var number_map_to_word_over_26 = function(collection){
  let letters="abcdefghijklmnopqrstuvwxyz";
  let ans=[];
  for(let i in collection){
    let c="";
    let ii=collection[i];
    while(ii){
      let t=(ii-1)%26;
      if(t==0){
        ii++;
      }
      c=letters[t]+c;
      ii=Math.floor((ii-1)/26);
    }
    ans.push(c);
  }
  return ans;
};

module.exports = number_map_to_word_over_26;
