'use strict';
function getLength(a){
    let cnt=0
    while(a){
        a=Math.floor(a/10);
        cnt++;
    }
    return cnt;
}
var even_group_calculate_average = function(collection){
    let ans=[];
    let c=collection.filter(function(value,index,arr){
        return (index+1)%2==0&&value%2==0;
    }).sort(function(a,b){
        return a-b;
    });
    if(c.length==0){
        return [0];
    }
    let s=[];
    for(let i=0;i<=getLength(c[c.length-1]);i++){
        s.push([]);
    }
    for(let i=0;i<c.length;i++){
        s[getLength(c[i])].push(c[i]);
    }
    for(let i=1;i<s.length;i++){
        if(s[i].length!=0){
            let sum=0;
            for(let j=0;j<s[i].length;j++){
                sum+=s[i][j];
            }
            sum=sum/s[i].length;
            ans.push(sum);
        }
    }
    return ans;
};
module.exports = even_group_calculate_average;
