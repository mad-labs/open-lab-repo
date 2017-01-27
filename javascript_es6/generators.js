let obj2 ={uno:'primo',due:'secondo'};
obj2[Symbol.iterator] = function *(){
  let keys = Object.keys(this);
  for (prop of keys) {
    yield this[prop];
  }
};

for (item of obj2) {
  console.log(item);
}
