/*
    Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

    Examples
    n = 0  ==> [1]        # [2^0]
    n = 1  ==> [1, 2]     # [2^0, 2^1]
    n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

//answer
function powersOfTwo(n) {
    //created an empty array
    const arrayOfPowers = []
    //loop to add items to the array which are derivatives 2 to the power of i, till the n
    for (let i = 0; i <= n; i++) {
        arrayOfPowers.push(2 ** i)
    }
    //return the new array created from loop
    return arrayOfPowers
}