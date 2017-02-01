"use strict";

let arr = ["a","b","c"];

console.log(arr);

let arr2 = arr.map((item) => {
  return item + '0';
}).map((item) => {
  return '0' + item;
}).find((item) => {
  return item.includes('a');
});

console.log(arr2);
