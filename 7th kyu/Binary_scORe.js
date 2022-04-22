/*
Objective
Given a number n we will define its scORe to be 0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.

Write a function that takes n and finds it's scORe.

n	scORe n
0	0
1	1
49	63
1000000	1048575
Any feedback would be much appreciated
*/

//answer    
//if n is greater then 0 --> convert the number to a binary via toString then replace the 0 with 1 then parse the new binary number and return a binary number
//else return 0
const score = n => n?parseInt(n.toString(2).replace(/[0]/g,'1'),2):0