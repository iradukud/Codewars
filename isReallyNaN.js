/*
I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

Any solution is acceptable!
*/

//answer    
const isReallyNaN = (val) => {
    // returned a boolean value base on whether the numbers is NaN and it's a type of number
    return Number.isNaN(val)
}