/*
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

//answer    
function twoHighest(arr) {
    //sorted the arr element in an descending order
    const arrSort = arr.sort((a, b) => b - a)
    // if arr length is less than 2 return the arr back
    //else return the two highest values in the array
    return arr.length < 2 ? arr : [arrSort[0], arrSort.filter(x => x != arrSort[0])[0]]
}