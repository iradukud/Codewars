/*
DESCRIPTION:
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"

*/

//Solution    
function vowelOne(s) {
    //variable that holds vowels characters
    const vowels = ['a', 'e', 'i', 'o', 'u']
    //returned a string with all the vowels replace by 1 and non-vowels by 0
    return [...s.toLowerCase()].map(x => vowels.includes(x) ? 1 : 0).join('')
}