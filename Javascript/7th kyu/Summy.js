/*
DESCRIPTION:
Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.

*/

//Solution    
function summy(stringOfInts) {
    //returned the sum of the numbers inside the given string
    return stringOfInts.split(' ').reduce((sum, num) => sum + +num, 0)
}