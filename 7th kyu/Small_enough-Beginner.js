/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

//answer    
function smallEnough(a, limit) {
    //return a boolean based on every element in the array (a) being lower/equal to the limit
    return a.every(x => x <= limit)
}