/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

//answer    
function sumDigits(number) {
    //turn the number into an array and then reduced it to a sum of it's elements
    //then return this sum
    return [...Math.abs(number) + ''].reduce((sum, num) => sum + +num, 0)
}