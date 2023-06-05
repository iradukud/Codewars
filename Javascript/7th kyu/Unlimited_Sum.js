/*
DESCRIPTION:
Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

The function should reject any arguments that are not integers, and sum the remaining integers.

sum(1, 2, 3)   // -> 6
sum(1, "2", 3) // -> 4
*/

//Solution    
function sum() {
    //returned the some of the intergers from the given arguments
    return [...arguments].reduce((sum, num) => Number.isInteger(num) ? sum + num : sum, 0)
}