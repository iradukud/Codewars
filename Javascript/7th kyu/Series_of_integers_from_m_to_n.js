/*
DESCRIPTION:
Task
Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

Input
Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

Example
generateIntegers(2, 5) // --> [2, 3, 4, 5]
*/

//Solution    
function generateIntegers(m, n) {
    //returned an array that goes from m to n and increments by 1
    return Array.from({ length: n - m + 1 }, (_, i) => m + i)
}