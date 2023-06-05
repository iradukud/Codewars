/*
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

//answer    
const findSum = function (n) {
    //created an array of the multiplels of 3 and 5 in the given number
    //then reduced it to their array to their sum and return the sum
    return Array.from({ length: n }, (_, i) => 1 + i).filter(x => x % 3 == 0 || x % 5 == 0).reduce((sum, num) => sum + num)
}