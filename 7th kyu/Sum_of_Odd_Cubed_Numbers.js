/*
DESCRIPTION:
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

//Solution    
function cubeOdd(arr) {
    //first filter out all the even numbers then squared the odd nums and then reduced them to their sum
    let sum = arr.filter(x => x % 2 != 0).map(x => x * x * x).reduce((sum, num) => sum + num, 0)
    //if sum is NaN return undefined else return sum 
    return isNaN(sum) ? undefined : sum
}