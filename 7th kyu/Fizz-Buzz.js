/*
DESCRIPTION:
Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

For example, solution(20) should return [5, 2, 1]

*/

//Solution    
function solution(num) {
    //variables that holds the multiples count
    const a = Array.from({ length: num - 1 }, (_, i) => i + 1).filter(x => x % 3 == 0 && x % 5 != 0).length
    const b = Array.from({ length: num - 1 }, (_, i) => i + 1).filter(x => x % 5 == 0 && x % 3 != 0).length
    const c = Array.from({ length: num - 1 }, (_, i) => i + 1).filter(x => x % 5 == 0 && x % 3 == 0).length
    //return the multiples in an array
    return [a, b, c]
}