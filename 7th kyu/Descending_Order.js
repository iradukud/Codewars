/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

//answer    
//converted the number to a string, then split it into an array
//sorted the array elements in a descending order, then join the elements together to create one string
//return that string as a number
const descendingOrder = n => +String(n).split('').sort((x,y)=>y-x).join('')