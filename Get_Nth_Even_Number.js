/*
Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
*/

//answer    
//to get the nth we times n by 2 (a number can either negative or postive)
//then we subtracted 2 since we started from zero and were looking for even number
const nthEven = n => n * 2 - 2