/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

//answer    
const getDivisorsCnt = function (n) {
    //variable that keeps count of the divisors   
    let count = 0
    //loop that starts from 1 till n
    for (i = 1; i <= n; i++) {
        //if n is divisible by i then add to the count     
        if (n % i == 0) {
            console.log(i)
            count++
        }
    }
    //return the total count of divisors
    return count
}