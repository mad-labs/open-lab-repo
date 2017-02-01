"use strict";

let obj1 = {pippo: 'pippo'};
let obj2 = {pluto: 'pluto'};
let arr1 = ['paperino', 'topolino'];

let objectAsMap = new Object();
objectAsMap[obj1.toString()] = 1;
objectAsMap[obj2] = 2;
objectAsMap[arr1] = 3;


for (var key in objectAsMap) {
  if (objectAsMap.hasOwnProperty(key)) {
    console.log('val: ', objectAsMap[key]);
  }
}
console.log(JSON.stringify(objectAsMap, null, 2));

let mapAsMap = new Map();
mapAsMap.set(obj1, 1);
mapAsMap.set(obj2, 2);
mapAsMap.set(arr1, 3);

for (let [key, value] of mapAsMap) {
  console.log('val: ', mapAsMap.get(key));
}
console.log(mapAsMap);
