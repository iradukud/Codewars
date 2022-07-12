/*
DESCRIPTION:
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/

//Solution    
function unusedDigits(...x) {
    //variable that holds all the digits
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    //variable that holds the inputted digit/numbers as a string
    const inputDigits = x.join('')
    //returned the missing digits
    return digits.filter(x => !inputDigits.includes(x)).join('')
}