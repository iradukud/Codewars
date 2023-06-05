/*
    Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

    For example:

    summation(2) -> 3
    1 + 2

    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

//answer
var summation = function (num) {
    //created variable that keeps summation total
    let sum = 0
    //loop to add number from 1 to num
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    //return total of sum
    return sum
}