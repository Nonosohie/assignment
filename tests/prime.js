// testing code goes here

'use strict'
var chai = require('chai');
var math = require('mathjs');

var expect = chai.expect;

var myfile = require('../App/primeCode.js');
 
 
 
 
 describe("Case for prime numbers from 0 to n", function() {



     it("should return  [2, 3, 5, 7, 11] for 12", function() {

       expect(myfile.getPrimes([2, 3, 5, 7, 11])).to.equal(12);

     });
	 it("should return  [2] for 2", function() {

       expect(myfile.getPrimes([2])).to.equal(2);

     });
     it("should return `None` for [-1]", function() {

       expect(myfile.getPrimes([-1])).to.equal('None');

     });
	      it("should return 0 for an empty array", function() {

       expect(myfile.getPrimes([])).to.equal(0);

     });
	 
	 });




