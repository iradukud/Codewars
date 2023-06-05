/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
*/

//answer    
function capitalize(s) {
    //created an array then alter case on even array elements to upper then place it in the return array as a string
    //created an array then alter case on odd array elements to upper then place it in the return array as a string
    //return the array with it's strings
    return [[...s].map((x, i) => i % 2 ? x : x.toUpperCase()).join(''), [...s].map((x, i) => !(i % 2) ? x : x.toUpperCase()).join('')]
}