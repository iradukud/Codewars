/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

//answer
// reduce an a array to a single number, which is a product of all it's element
//product starts at 1
const grow = x => x.reduce((product,number)=> product * number,1)