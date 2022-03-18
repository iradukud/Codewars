/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

//answer

function digitize(n) {
    //converted the number to a string then turn it to an array then reversed the array order
    //then changed each element into a number
    return String(n).split('').reverse().map((i) => Number(i))
  }