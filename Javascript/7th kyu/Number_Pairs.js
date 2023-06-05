/*
DESCRIPTION:
In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

*/

//Solution    
function getLargerNumbers(a, b) {
    //returned array with the highest value on each index/element 
    return a.map((x, i) => Math.max(x, b[i]));
}