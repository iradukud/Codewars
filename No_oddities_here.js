/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

//answer    
function noOdds(values) {
    //filter the values array, so it contained only even numbers
    //then return this filtered array
    return values.filter(x => x % 2 == 0)
}