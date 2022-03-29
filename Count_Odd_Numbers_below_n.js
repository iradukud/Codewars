/*
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!
*/

//answer
//function that return the number of positive odd numbers below n
//use a math trick --> if something is divisible by 2 all the amount of number below it will be half
//So the same can be said for odd but we round down
const oddCount = (n) => Math.floor(n/2)
