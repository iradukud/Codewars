/*
DESCRIPTION:
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.

*/

//Solution  
function arraySum(arr) {
    //returned the sum of all the numbers in the arrays
    return arr.join('*').replace(/[,]/g, '*').split('*').reduce((sum, num) => isNaN(num) ? sum : sum + +num, 0)
}