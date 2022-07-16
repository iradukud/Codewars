/*
DESCRIPTION:
Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40
*/

//Solution    
const closestMultiple10 = num => {
    //returned the number rounded to the nearest multiple of 10
    return Math.round(num / 10) * 10
}