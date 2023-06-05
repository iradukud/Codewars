/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

//answer
//function that returns the sum of the array elements
//it also turns any string number element into a number
const sumMix = (x) => x.reduce((sum, number) => Number(sum)+Number(number),0)