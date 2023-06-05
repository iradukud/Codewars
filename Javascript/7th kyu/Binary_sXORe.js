/*
Objective
Given a number n we will define it's sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.

Write a function that takes n and returns it's sXORe.

Examples
n	sXORe n
0	0
1	1
50	51
1000000	1000000
*/

//answer    
const sxore = function (n) {
    // if n is multiple of 4
    if (n % 4 == 0)
        return n;
    // If n % 4 gives remainder 1    
    if (n % 4 == 1)
        return 1;
    // If n % 4 gives remainder 2   
    if (n % 4 == 2)
        return n + 1;
    // If n % 4 gives remainder 3
    if (n % 4 == 3)
        return 0;
}