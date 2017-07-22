'use strict';
var calculate_average = function(collection){
    let sum=0;
    let cnt=0;
    for(let i=0;i<collection.length;i++){
        if((i+1)%2==0){
            sum+=collection[i];
            cnt++;
        }
    }
    return sum/cnt;
};
module.exports = calculate_average;
