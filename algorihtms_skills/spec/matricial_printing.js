var path = require('path');
var expect = require('chai').expect;

var matricial_printing = require(path.join(__dirname, '..', './luis_matricial_printing.js'));

describe('matricial_printing()', function () {
  'use strict';

  it('exists', function () {
    expect(matricial_printing).to.be.a('function');

  });

  it(`solving with:
    let matrix = [
      [1,  2,  3]
    ];`, function () {
    let matrix = [
      [1,  2,  3]
    ];

    expect(matricial_printing(matrix)).to.equal('1,2,3');
  });

  it(`solving with:
    let matrix = [
      [1],
      [4]
    ];`, function () {
    let matrix = [
      [1],
      [4]
    ];

    expect(matricial_printing(matrix)).to.equal('1,4');
  });

  it(`solving with:
    let matrix = [
      [1,  2,  3],
      [4,  5,  6]
    ];`, function () {
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
    [ 1,  2, 3, 4], // n = 4
    [ 5,  6, 7, 8],
    [ 9, 10,11,12],
    [ 13,14,15,16]
  ]; // m = 4`, function () {
  let matrix = [
    [ 1,  2, 3, 4], // n = 4
    [ 5,  6, 7, 8],
    [ 9, 10,11,12],
    [ 13,14,15,16]
  ]; // m = 4
  
    expect(matricial_printing(matrix)).to.equal('1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10');
  });

  //it('does something else', function () {
    //expect(true).to.equal(false);
  //});

  // Add more assertions here
});
