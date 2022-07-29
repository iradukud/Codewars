/*
DESCRIPTION:
Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.

Example:

findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

*/

//Solution    
const findAll = (array, n) => {
    //variable that hold the array that will be returned
    const arr = []
    //loop that goes through the whole array and pushes the index position for every n occurence
    for (i = 0; i < array.length; i++) {
        if (array[i] == n) {
            arr.push(i)
        }
    }
    //return the arr with the index positions of n
    return arr
}