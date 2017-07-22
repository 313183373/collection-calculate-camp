function collect_same_elements(collection_a, collection_b) {
  let ret=[];
  for(let i=0;i<collection_a.length;i++){
      if(collection_b[0].indexOf(collection_a[i])!=-1){
          ret.push(collection_a[i]);
      }
  }
  return ret;
}

module.exports = collect_same_elements;
