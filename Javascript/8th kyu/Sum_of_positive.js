/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

//Answers
function positiveSum(arr) {
  //return the sum of all the positive elements
  return arr.reduce((accumulator, currentValue) => currentValue > 0 ? accumulator + currentValue : accumulator, 0)
}