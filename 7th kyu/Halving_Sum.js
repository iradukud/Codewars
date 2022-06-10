/*
DESCRIPTION:
Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

//Solution    
function halvingSum(n) {
    //variable that holds the sum of all the halves including n
    let sum = n
    //loop that halves n and adds it to the sum
    while (n >= 1) {
        n = Math.floor(n / 2)
        sum += n
    }
    //returned the sum
    return sum
}