/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

//answer    
//if the numbers are equal return one of them 
//else return the sum of all the numbers inbetween (including themselves) the 2 numbers
//how sum was calculated --> New array with the length of a-b absolute value plus 1 cause array's start from zero
//then fill each element with the lowest number of the two
//then create a new element that has all the numbers in between --> number+index
//then reduced the array to it's sum and return it
const getSum = ( a,b ) => a==b? a : Array(Math.abs(a-b)+1).fill(a>b? b : a).map((x,i)=> x+i).reduce((sum,num)=> sum+num,0)