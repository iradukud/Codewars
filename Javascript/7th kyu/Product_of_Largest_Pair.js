/*
DESCRIPTION:
Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874

*/

//Solution  
function maxProduct(a) {
    //extracted the biggest value in the array
    const biggest = Math.max(...a)
    //then removed it
    a.splice(a.indexOf(biggest), 1)
    //the return the value of the biggest value multipled by the new biggest value
    return biggest * Math.max(...a)
}