'use strict';
var calculate_median = function(collection){
    let s=[];
    for(let i=0;i<collection.length;i++){
        if((i+1)%2==0){
            s.push(collection[i]);
        }
    }
    if(s.length%2==0){
        return (s[Math.floor(s.length/2)]+s[Math.floor(s.length/2)-1])/2;
    }else{
        return s[Math.floor(s.length/2)];
    }
};
module.exports = calculate_median;
