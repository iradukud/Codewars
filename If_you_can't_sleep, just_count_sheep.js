/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

//answer
// create a new array with num length and then fill the elements with 0
//use map method to element = index + 1 and added the sheep... to every element
//join the elements back together to create a string
var countSheep = num => Array(num).fill(0).map((element, index)=> `${index+1} sheep...`).join('')