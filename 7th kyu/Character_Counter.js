/*
DESCRIPTION:
You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word.
*/

//Solution    
function validateWord(s) {
    //variable that holds the string converted to an array and lower case
    const stringToArray = [...(s.toLowerCase())]
    //variable that holds the length of one one character in a filtered arr
    const baseLength = stringToArray.filter(x => x == s[0].toLowerCase()).length
    //returned a boolean based on whether every character had the same length
    return stringToArray.every((x, i, arr) => arr.filter(z => z == x).length == baseLength)
}