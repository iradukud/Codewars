/*
DESCRIPTION:
Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)

Examples
powerOf4(1024) // returns true
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false

*/

//Solution    
function powerOf4(n) {
    //if the given argument is not a number return false
    if (typeof n != 'number') { return false }
    //else return a boolean based on whether the argument is a power of 4
    return Number.isInteger(Math.log(n) / Math.log(4))
}