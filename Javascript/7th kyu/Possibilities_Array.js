/*
DESCRIPTION:
A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Example:

a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true

*/

//Solution  
function isAllPossibilities(x) {
    //if the given array has only 0 and a length of 1 return true
    if (x.join('') == 0 && x.length == 1) { return true }
    //if the array has a length less than 2 return false
    if (x.length < 2) { return false }
    //else return a boolean based on whether the array given is an array of all possibilities
    return Array.from({ length: x.length - 1 }, (_, i) => i).every(y => x.includes(y))
}