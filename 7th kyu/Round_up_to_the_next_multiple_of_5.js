/*
Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

//answer    
const roundToNext5 = function (n) {
    //divided the n by 5 and rounded up the value to determine which multiiple of 5 will return 
    //then times it to get the multiple 
    return Math.ceil(n / 5) * 5
}