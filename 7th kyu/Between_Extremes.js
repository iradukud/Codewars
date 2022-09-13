/*
DESCRIPTION:
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

*/

//Solution  
function betweenExtremes(numbers) {
    //returned the difference between the max and min numbers in the given parameter
    return Math.max(...numbers) - Math.min(...numbers)
}