/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
*/

//answer    
//get the sum of the array and then determine wether it was even or odd
const oddOrEven = array => array.reduce((sum,num)=> sum+num,0)%2==0 ? 'even' : 'odd'