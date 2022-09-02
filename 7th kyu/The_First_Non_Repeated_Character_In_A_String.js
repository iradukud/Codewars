/*
DESCRIPTION:
You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, and None in Python.

You can assume, that the input string has always non-zero length.

Example
firstNonRepeated("test") // returns "e"
firstNonRepeated("teeter") // returns "r"
firstNonRepeated("trend") // returns "t" (all the characters are unique)
firstNonRepeated("aabbcc") // returns null (all the characters are repeated)

*/

//Solution  
function firstNonRepeated(s) {
    //variable that holds the first non-repeated character, it has null as default 
    let str = null
    //loop that runs till the the first non repeating character is found
    for (i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            str = s[i]
            break
        }
    }
    //return the non-repeating character or null
    return str
}