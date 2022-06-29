/*
DESCRIPTION:
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

//Solution    
function divCon(x) {
    //reduced the array to a sum of it integers minus it's non-integers and return the total
    return x.reduce((total, num) => typeof num == 'string' ? total - num : total + +num, 0)
}