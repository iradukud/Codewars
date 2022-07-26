/*
DESCRIPTION:
Implement a function that returns the minimal and the maximal value of a list (in this order).

*/

//Solution    
function getMinMax(arr) {
    //returned the min and max values from the arr
    return [Math.min(...arr), Math.max(...arr)]
}