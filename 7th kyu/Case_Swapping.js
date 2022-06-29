/*
DESCRIPTION:
Given a string, swap the case for each of the letters.

Examples
""           -->   ""
"CodeWars"   -->   "cODEwARS"
"abc"        -->   "ABC"
"ABC"        -->   "abc"
"123235"     -->   "123235"
*/

//Solution    
function swap(str) {
    //returned the string with the character cases swapped
    return [...str].map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
}