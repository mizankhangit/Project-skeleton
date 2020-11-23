/**
 * Title: Math Library
 * Description: Utility library for math-related functions
 * Author: Mizanur Rahman
 * Date: 11/23/2020
 */

// Math object - Module scaffolding
const math = {};

// Get a random integer between two integers
math.getRandomNumber = function getRandomNumber(min, max) {
  let minium = min;
  let maximum = max;
  minium = typeof minium === 'number' ? minium : 0;
  maximum = typeof maximum === 'number' ? maximum : 0;
  return Math.floor(Math.random() * (maximum - minium + 1) + min);
};

// Export the library
module.exports = math;
