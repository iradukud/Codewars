/*
DESCRIPTION:
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

tripleX("abraxxxas") → true
tripleX("xoxotrololololololoxxx") → false
tripleX("softX kitty, warm kitty, xxxxx") → true
tripleX("softx kitty, warm kitty, xxxxx") → false
Note :

capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false

*/

//Solution    
function tripleX(str) {
    //variable that holds the position of the first x
    const firstXIndex = str.indexOf('x')
    //returned a boolean based on whether the first occurence of x is followed by 2 other x's
    return str.slice(firstXIndex, firstXIndex + 3) == 'xxx'
}