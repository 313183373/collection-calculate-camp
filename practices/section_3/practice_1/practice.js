function create_updated_collection(collection_a, object_b) {
  for(let item in collection_a){
    if(object_b.value.indexOf(collection_a[item].key)!=-1){
      collection_a[item].count--;
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
