/*
DESCRIPTION:
This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.
*/

//Solution    
function evensAndOdds(num) {
    //returned the correspond value based on whether the num given was odd or even
    return num % 2 ? num.toString(16) : num.toString(2)
}