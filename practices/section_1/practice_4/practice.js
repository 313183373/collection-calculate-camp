function collect_same_elements(collection_a, object_b) {
  let ret=[];
  for(let i=0;i<collection_a.length;i++){
      if(object_b.value.indexOf(collection_a[i].key)!=-1){
          ret.push(collection_a[i].key);
      }
  }
  return ret;
}

module.exports = collect_same_elements;
