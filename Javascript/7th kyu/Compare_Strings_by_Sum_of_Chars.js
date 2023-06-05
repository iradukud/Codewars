/*
DESCRIPTION:
Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

//Solution    
function compare(s1, s2) {
    //variables that holds the sum of the characters
    //if string included characters which weren't letters convert the whole thing to an empty string 
    let sumS1 = /^[a-zA-Z\s.,]+$/.test(s1) && s1 != null ? [...s1.toUpperCase()].reduce((sum, num) => sum + +num.charCodeAt(0), 0) : ''
    let sumS2 = /^[a-zA-Z\s.,]+$/.test(s1) && s2 != null ? [...s2.toUpperCase()].reduce((sum, num) => sum + +num.charCodeAt(0), 0) : ''
    //returned a boolean value based on whether the sums of both string equalled
    return sumS1 == sumS2
}