'use strict';
var single_element = function(collection){
    let c=collection.filter(function(value,index,arr){
        return (index+1)%2==0
    });
    return c.filter(function(value,index,arr){
        return c.indexOf(value)==c.lastIndexOf(value);
    });
};
module.exports = single_element;
