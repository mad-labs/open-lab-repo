var path = require('path');
var expect = require('chai').expect;

var matricial_printing = require(path.join(__dirname, '..', './matricial_printing.js'));

describe('matricial_printing()', function () {
  'use strict';

  it('exists', function () {
    expect(matricial_printing).to.be.a('function');

  });

  it('does something', function () {
    let matrix = [
      [1,  3,  7],
      [5,  9,  12],
      [6,  1,  1,]
    ];

    expect(matricial_printing(matrix)).to.equal('1,3,7,12,1,1,6,5,9');
  });

  //it('does something else', function () {
    //expect(true).to.equal(false);
  //});

  // Add more assertions here
});
