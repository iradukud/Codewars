/*
DESCRIPTION:
It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

Digits can be a number, a string, or undefined. In case of undefined return an empty string ''.

To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.

*/

//Solution  
function sum(digits) {
    //if the given digits is underfined return an empty string
    if (digits == undefined) { return '' }
    //else returned the equation and it's sum as a string
    return [...digits + ''].join(' + ') + ' = ' + [...digits + ''].reduce((sumz, num) => sumz + +num, 0)
}