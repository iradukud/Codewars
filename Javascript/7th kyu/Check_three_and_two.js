/*
DESCRIPTION:
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"

*/

//Solution    
function checkThreeAndTwo(array) {
    //variablel the holds the frequencies of each character in the array
    const charLen = [...new Set(array)].map(x => array.filter(y => y == x).length)
    //returned a boolean value based on whether their was a character that appeared 3 and 2 times
    return charLen.includes(3) && charLen.includes(2)
}