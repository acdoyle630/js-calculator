
/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = (function() {
    var calculator = {};
    var memory = 0;
    var total = 0;

    
    calculator.load = function (x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
      total = x;
      return total;
    };
    calculator.getTotal = function () {
      return total;
    };
    calculator.add = function(x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
      total += x;
      return total;
    };
    calculator.subtract = function (x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
      total -= x;
      return total;
    };
    calculator.multiply = function (x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong datat type');
      }
      total *= x;
      return total;
    };
    calculator.divide = function (x) {
      if(typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
      total /= x;
      return total;
    };
    calculator.recallMemory = function() {
      memory = memory;
      return memory;
    };
    calculator.saveMemory = function() {
      memory = total;
      return memory;
    };
    calculator.clearMemory = function () {
      memory = 0;
      return memory;
    };

    

    return calculator;




});



  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

