'use strict';

function split_to_zero(number, interval) {
  let ans=[number];
  let n=number;
  while(n > 0){
    n=(n-interval).toFixed(1)-'0';
    if(n!=0){
      ans.push(n);
    }else{
      ans.push(n);
    }
  }
  return ans;
}

module.exports = split_to_zero;
