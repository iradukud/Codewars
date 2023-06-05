/*
DESCRIPTION:
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!

*/

//Solution    
function alternate(n, f, s) {
    //returned an array with the length of n and f&s insputs alternating as elements
    return Array.from({ length: n }, (_, i) => i % 2 ? s : f)
}