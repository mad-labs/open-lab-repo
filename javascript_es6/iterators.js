let arr =['uno','due'];
for (item of arr) {
  console.log(item);
}

let obj ={uno:'uno',due:'due'};
obj[Symbol.iterator] = function(){
  let keys = Object.keys(this);
  let count = 0;
  return {
    next: () => {
      return{
        done: count == keys.length,
        value: this[keys[count++]]
      }
    }
  }
};
for (item of obj) {
  console.log(item);
}

let arr2 = [...obj];
console.log(arr2);

let [var1, var2, var3] = obj;
console.log(var1);
console.log(var2);
console.log(var3);

let obj2 ={uno:'uno',due:'due'};
let [var4, var5, var6] = obj2;
console.log(var4);
console.log(var5);
console.log(var6);
