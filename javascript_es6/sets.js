"use strict";

let obj1 = {pippo: 'pippo'};
let obj2 = {pluto: 'pluto'};
let arr1 = ['paperino', 'topolino'];

let set = new Set();
console.log('set: ', set.add(obj1));
console.log('set: ', set.add(obj2));
console.log('set: ', set.add(obj1));
console.log('set: ', set.add(obj2));
console.log('set: ', set.add(arr1));


for (let item of set) {
  console.log('item: ', item);
}

/*
*/

let weakSet = new WeakSet();
console.log('Set: ', weakSet.add(obj1));
console.log('Set: ', weakSet.add(obj2));
console.log('Set: ', weakSet.add(obj1));
console.log('Set: ', weakSet.add(obj2));
//console.log('Set: ', weakSet.add(arr1));

console.log('res: ', weakSet.has(obj2));
console.log('res: ', weakSet.has(arr1));
