/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

//answer    
const stray = function(numbers) {
    //variables that hold the highest and lowest number
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)
    //runs a filter the filters out numbers that don't equal the min 
    // then return the min or max value that would return an array with 1 element
    return numbers.filter(x=> x == min).length ==1? min: max
  }