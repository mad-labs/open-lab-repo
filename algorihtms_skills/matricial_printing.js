/*! matricial_printing v0.0.0 - MIT license */
'use strict';

/*
  Given an n*m matrix, print it in "circular" order:

e.g.
  let matrix = [
    [1,  2,  3], // n = 3
    [4,  5,  6],
    [7,  8,  9]
  ]; // m=3

  ->     ->     ->      V     V      <-      <-    ^      ->
  [0,0], [0,1], [0,2], [1,2], [2,2], [2,1], [2,0], [1,0], [1,1]

  matricial_printing(matrix) == '1,2,3,6,9,8,7,4,5'

  let matrix2 = [
    [1,  2,  3, 4], // n = 4
    [5,  6,  7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]; // m = 4
  
  matricial_printing(matrix) == '1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10'
  
 */

//[delta_m,delta_n]

const matricial_printing = function(matrix) {
  
  let n = matrix[0].length;
  let m = matrix.length;
  let result= [];

  console.log('matrix: ', matrix);
  console.log('initial n: ', n);
  console.log('initial m: ', m);
  console.log('initial result: ', result);

  let step = 0;
  let counter = 0;
  let direction = '>';
  while(counter < 2){
    //n >
    //(m - 1) v
    //(n - 1) <
    //(m - 2) ^
    //(n - 2) > ....
    result.push(direction);
    step++;
    if (step == (n + counter) || step == (m + counter) ) {
      direction = 'V';
      counter++;
      step = 0;
    }
  }

  return result.join();
};

if ( typeof module !== "undefined" ) {
  module.exports = matricial_printing;
}