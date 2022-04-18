/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

//answer    
//split the number into an array then square every element then join the elements back as a string
//returned the string back as interger
const squareDigits = num => Number(String(num).split('').map(x=> x**2).join(''))