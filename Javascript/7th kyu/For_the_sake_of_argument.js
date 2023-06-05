/*
DESCRIPTION:
Write a function named numbers.

function should return True if all parameters are of the Number type.

The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true
*/

//Solution    
function numbers(...x) {
    //returned an array based on whether all the given arguments were 
    return x.every(x => typeof x == 'number')
}