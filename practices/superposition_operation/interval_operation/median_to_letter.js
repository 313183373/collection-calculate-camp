'use strict';

function func1(number){
  let letters="abcdefghijklmnopqrstuvwxyz";
  let c="";
  let ii=number;
  while(ii!=0){
      let d=letters[(ii-1)%26];
      if(d==0){
        ii++;
    }
    c=d+c;
    ii=Math.floor((ii-1)/26);
  }
  return c;
}

function median_to_letter(collection) {
  if(collection.length%2==0){
    let length=collection.length;
    let sum=collection[Math.floor(length/2)]+collection[Math.floor(length/2)-1];
    sum=Math.ceil(sum/2);
    return func1(sum);
  }else{
    let length=collection.length;
    return func1(collection[Math.floor(length/2)]);
  }
}

module.exports = median_to_letter;
