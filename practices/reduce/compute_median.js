'use strict';

function compute_median(collection) {
  let ans=0;
  let arr=collection;
  arr.sort(function (a,b){
    return a-b;
  });
  if(arr.length%2==0){
    ans=(arr[arr.length/2]+arr[arr.length/2-1])/2;
  }else{
    ans=(arr[Math.floor(arr.length/2)]);
  }
  return ans;
}

module.exports = compute_median;


