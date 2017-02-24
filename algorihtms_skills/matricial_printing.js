/*! matricial_printing v0.0.0 - MIT license */
'use strict';

/*
  Given an n*m matrix, print it in "spiral" order:

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
const matricial_printing = function(matrix) {
  return '';
};

if ( typeof module !== "undefined" ) {
  module.exports = matricial_printing;
}
