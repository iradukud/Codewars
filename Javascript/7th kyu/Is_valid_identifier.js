/*
DESCRIPTION:
Given a string, determine if it's a valid identifier.

Here is the syntax for valid identifiers:
Each identifier must have at least one character.
The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign. In other words, it can be any valid identifier character.
Examples of valid identifiers:
i
wo_rd
b2h
Examples of invalid identifiers:
1i
wo rd
!b2h

*/

//Solution  
function isValid(idn) {
    //if the given identifier is empty return false
    if (idn.length == 0) { return false }
    //variablel that holds boolean value based on whether the first character meets the standard
    const a = idn[0] == '$' || idn[0] == '_' || 'abcdefghijklmnopqrstuvwxyz'.includes(idn[0].toLowerCase())
    //variablel that holds boolean value based on whether the rest of the characters meet the standard
    const b = [...idn.slice(1)].every(x => x == '$' || x == '_' || 'abcdefghijklmnopqrstuvwxyz'.includes(x.toLowerCase()) || '0123456789'.includes(x))
    //returned the final boolean based on the 2 boolean
    return a && b
}