'use strict';
var is_exist_element = function(collection,element){
    let c=collection.filter(function(value,index,arr){
        return (index)%2==0&&value==element;
    })
    return c.length!=0;
};
module.exports = is_exist_element;
