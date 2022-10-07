/*
DESCRIPTION:
Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.

*/

//Solution  
function charToAscii(string) {
    if (!string) { return null }
    const obj = {}
    string.split('').forEach(x => !obj[x] && 'abcdefghijklmnopqrstuvwxyz'.includes(x.toLowerCase()) ? obj[x] = x.charCodeAt(0) : null)
    if (Object.keys(obj).length == 0) { return null }
    return obj
}