/*
DESCRIPTION:
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

//Solution    
function calculate(str) {
    //replaced all the word operators 
    //then return the solution from the equation
    return eval(str.replace(/plus/ig, '+').replace(/minus/ig, '-')) + ''
}