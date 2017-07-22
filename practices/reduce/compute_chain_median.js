'use strict';

function compute_chain_median(collection) {
  let ans;
  let arr=collection.split('->');
  for(let i=0;i<arr.length;i++){
    arr[i]=arr[i]-'0';
  }
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

module.exports = compute_chain_median;
