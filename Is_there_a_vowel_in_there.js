/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

//answer    
const isVow = function (a) {
    //created a objet which contains the properties names which are vowels values and a corresponding letter
    const vows = { 97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u' }
    //return a new array with the vowel values replaced with their letter counter-parts
    return a.map(x => vows[x] ? vows[x] : x)
}