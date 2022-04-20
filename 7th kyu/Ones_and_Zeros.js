/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

//answer 
//converted the binary array to array numbers using the this general formual decimal = d0×20 + d1×21 + d2×22 + ... 
//reveresed order to allow the reduce to start from current index without having to play with it
//then reduced it to its sum
const binaryArrayToNumber = arr => arr.reverse().reduce((sum, num, index) => sum + (num * 2 ** index), 0)
