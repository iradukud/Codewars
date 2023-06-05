/*
DESCRIPTION:
Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
The first array will always have at least one element.
*/

//Solution    
function findMissing(arr1, arr2) {
    //variable that holds the given arrays sorted 
    const arr1Sort = arr1.sort((a, b) => a - b)
    const arr2Sort = arr2.sort((a, b) => a - b)
    //loop that goes through arr1 and returns the missing element in array 2 
    for (i = 0; i < arr1Sort.length; i++)
        if (arr1Sort[i] != arr2Sort[i]) {
            return arr1Sort[i]
        }
}  