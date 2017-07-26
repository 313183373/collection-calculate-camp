'use strict';

function get_letter_interval(number_a, number_b) {
  let letters="abcdefghijklmnopqrstuvwxyz";
  let ans=[];
  if(number_a<=number_b){
    for(let i=number_a;i<=number_b;i++){
      let c="";
      let ii=i;
      while(ii!=0){
        let d=letters[(ii-1)%26];
        if(d==0){
          ii++;
        }
        c=d+c;
        ii=Math.floor((ii-1)/26);
      }
      ans.push(c);
    }
    return ans;
  }else{
    return get_letter_interval(number_b,number_a).reverse();
  }
}

module.exports = get_letter_interval;
