/*
DESCRIPTION:
Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]

*/

//Solution  
function factors(x) {
    //if the given number is less than or equal to 0 or isn't an integer return -1 
    if (x <= 0 || x % 1 != 0) { return -1 }
    //else return the factors of x in descending order
    return Array.from({ length: x }, (_, i) => x - i).filter(y => x % y == 0)
}