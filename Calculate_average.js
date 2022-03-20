/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

//answer
function find_average(array) {
    //if the arry is empty return 0  
    if (array.length <= 0) {
          return 0
    //if array is not 0 then return their average  
    } else {
        //calculates the sum of all the variables  
        const sum = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        //return the average of sum 
        return sum / array.length
      }
  }