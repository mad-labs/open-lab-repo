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

function MatrixSpiralIterator(matrix) {
    this.hasNext = function() {
        return false;
    };

    this.next = function() {
        return -1;
    };
}

const luis_matricial_printing = function(matrix) {
    let spiral = [],
        min = 0,
        maxH = matrix.length - 1,
        maxL = maxH === -1 ? 0 : matrix[0].length - 1,
        i;

    while (min <= maxH && min <= maxL) {
        for (i = min; i <= maxL; i++) {
            spiral.push(matrix[min][i]);
        }

        for (i = min + 1; i <= maxH; i++) {
            spiral.push(matrix[i][maxL]);
        }

        for (i = maxL - 1; i >= min && maxH > min; i--) {
            spiral.push(matrix[maxH][i]);
        }

        for (i = maxH - 1; i > min && maxL > min; i--) {
            spiral.push(matrix[i][min]);
        }

        min += 1, maxH -= 1, maxL -= 1;
    }
    
    console.log('..' + spiral.toString());
    
    return spiral.join();
};

if (typeof module !== "undefined") {
    module.exports = luis_matricial_printing;
}
