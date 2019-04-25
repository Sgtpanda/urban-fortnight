"use strict";
const RomanNumerals = require('./main.js');
//Included to compare against
const testPackage = require('roman-numeral');
const assert = require('assert').strict;

let RNG = new RomanNumerals();

// Generate 5 random numbers and compare them against the test package
for (let i = 0; i < 5; i++){
  let randomNumber = Math.random() * 3998 + 1
  let myValue = RNG.generate(randomNumber);
  let testCompairson = testPackage.convert(randomNumber);
  assert.deepStrictEqual(myValue,testCompairson,`Expected ${testCompairson} but got ${myValue} for input value of ${randomNumber}`);
}

// Ensure that using an out of range value throws an error
assert.throws(() => {
  RNG.generate(5000);
},RangeError,"Expected out of range value to throw RangeError but didn't");

// If we get here then everything was successful
console.log("All tests successful")