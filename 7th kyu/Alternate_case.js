/*
DESCRIPTION:
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

//Solution    
function alternateCase([...s]) {
    //returned the string with each alternative casing for each character
    return s.map(x => x.toLowerCase() == x ? x.toUpperCase() : x.toLowerCase()).join('')
}