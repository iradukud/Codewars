/*
DESCRIPTION:
Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"

*/

//Solution  
function moveVowel(input) {
    //returned the string with the all the vowels appearing at the end
    return [...input].filter(x => !'aeiou'.includes(x)).join('') + [...input].filter(x => 'aeiou'.includes(x)).join('')
}