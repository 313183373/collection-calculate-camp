'use strict';
function get_integer_interval_2(number_a, number_b) {
  let ans=[];
  if(number_a<number_b){
    let i;
    if(number_a%2==0){
      i=number_a;
    }else{
      i=number_a+1;
    }
    ans.push(i);
    while(i<number_b){
      i+=2;
      if(i<=number_b)
        ans.push(i);
    }
  }else if(number_a>number_b){
    let i;
    if(number_a%2==0){
      i=number_a;
    }else{
      i=number_a-1;
    }
    ans.push(i);
    while(i>number_b){
      i-=2;
      if(i>=number_b)
        ans.push(i);
    }
  }else{
    if(number_a%2==0){
      ans.push(number_a);
    }
  }
  return ans;
}

module.exports = get_integer_interval_2;
