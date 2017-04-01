/* jshint esversion: 6*/

// import dependencies e.g. chai and the calculator module
var chai = require('chai');
var expect = chai.expect;


var calculator = require('../calculator.js');
let myCalculator = calculator();
// define two variables: `expect` and `should`.


// define a `describe` block. what are we testing? what should be name this suite? This is the "container" describe block.
describe('calculator',()=>{
});

  /**
   * each method should have it's own `describe` block
   */

  // define a `describe` block to test the `load` method and all these tests go INSIDE of this describe
describe('calculator', ()=>{
  it('should be a function', ()=>{
    expect(myCalculator).to.be.a('object');
  });
});

describe('load',()=>{
  it('should be a function', ()=>{
    expect(myCalculator.load).to.be.a('function');
  });
  it('should take a number as paramater',() => {
    expect(myCalculator.load.bind(null, 'hello')).to.throw(Error);
    expect(myCalculator.load.bind(null, '20')).to.throw(Error);
  });
  it('should return total', () =>{
    expect(myCalculator.load(25)).to.be.equal(25);
  });
});
  // define a `describe` block to test the `getTotal` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `add` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `subtract` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `multiply` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `divide` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `recallMemory` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `saveMemory` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `clearMemory` method and all these tests go INSIDE of this describe

  /**
   * FINAL BOSS
   */

  // define a `describe` block to test the `validation` features of your methods and all these tests go INSIDE of this describe
