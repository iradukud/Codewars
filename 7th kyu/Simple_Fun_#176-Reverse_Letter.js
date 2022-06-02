/*
Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

//answer    
function reverseLetter(str) {
    //turn the string into an array then filtered out non-letters and reverse the remaining elements
    //then return the array as a string
    return [...str].filter(x => x.toUpperCase() != x.toLowerCase()).reverse().join('')
}