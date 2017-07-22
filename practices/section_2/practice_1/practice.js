function count_same_elements(collection) {
	let dic={};
	let ans=[];
	for(let i=0;i<collection.length;i++){
		if(typeof(dic[(collection[i])])=='undefined'){
			dic[collection[i]]=1;
		}else{
			dic[collection[i]]++;
		}
	}
	for(let item in dic){
		ans.push({key:item,count:dic[item]})
	}
	return ans;
}

module.exports = count_same_elements;
