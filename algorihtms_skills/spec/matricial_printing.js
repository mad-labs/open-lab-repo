var path = require('path');
var expect = require('chai').expect;

var matricial_printing = require(path.join(__dirname, '..', './matricial_printing.js'));

describe('matricial_printing()', function () {
  'use strict';

  it('exists', function () {
    expect(matricial_printing).to.be.a('function');

  });

  it(`solving with:
    let matrix = [
      [], // n=0
    ]; // m=0`, function () {
    let matrix = [
      []
    ];

    expect(matricial_printing(matrix)).to.equal('');
  });

  it(`solving with:
    let matrix = [
      [1], // n=1
    ]; // m=1`, function () {
    let matrix = [
      [1]
    ];

    expect(matricial_printing(matrix)).to.equal('1');
  });

  it(`solving with:
    let matrix = [
      [1,  2,  3], // n=3
    ]; // m=1`, function () {
    let matrix = [
      [1,  2,  3]
    ];

    expect(matricial_printing(matrix)).to.equal('1,2,3');
  });

  it(`solving with:
    let matrix = [
      [1], // n=1
      [4]
    ]; // m=2`, function () {
    let matrix = [
      [1],
      [4]
    ];

    expect(matricial_printing(matrix)).to.equal('1,4');
  });

  it(`solving with:
    let matrix = [
      [1,  2,  3], // n = 3
      [4,  5,  6]
    ]; // m=2`, function () {
    let matrix = [
      [1,  2,  3],
      [4,  5,  6]
    ];

    expect(matricial_printing(matrix)).to.equal('1,2,3,6,5,4');
  });

  it(`solving with:
  let matrix = [
    [1,  2,  3], // n = 3
    [4,  5,  6],
    [7,  8,  9]
  ]; // m=3`, function () {
  let matrix = [
    [1,  2,  3], // n = 3
    [4,  5,  6],
    [7,  8,  9]
  ]; // m=3
    expect(matricial_printing(matrix)).to.equal('1,2,3,6,9,8,7,4,5');
  });

  it(`solving with:
  let matrix = [
    [ 1, 2, 3], // n = 3
    [ 4, 5, 6],
    [ 7, 8, 9],
    [10,11,12],
    [13,14,15]
  ]; // m = 5`, function () {
  let matrix = [
    [ 1, 2, 3], // n = 3
    [ 4, 5, 6],
    [ 7, 8, 9],
    [10,11,12],
    [13,14,15]
  ]; // m = 5
  
    expect(matricial_printing(matrix)).to.equal('1,2,3,6,9,12,15,14,13,10,7,4,5,8,11');
  });

  it(`solving with:
  let matrix = [
    [ 1, 2, 3, 4, 5], // n = 5
    [ 6, 7, 8, 9,10],
    [11,12,13,14,15]
  ]; // m=3`, function () {
  let matrix = [
    [ 1, 2, 3, 4, 5], // n = 5
    [ 6, 7, 8, 9,10],
    [11,12,13,14,15]
  ]; // m=3
    expect(matricial_printing(matrix)).to.equal('1,2,3,4,5,10,15,14,13,12,11,6,7,8,9');
  });


});
