/*
DESCRIPTION:
Task
Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, and returns them as a pair of sequences.

Return a nested array or a tuple depending on the language:

The first sequence being only the 1s and 0s from the original sequence.
The second sequence being the indexes of the elements greater than 1 in the original sequence.
Examples
[ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ] => [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]
Please upvote and enjoy!

*/

//Solution  
function binaryCleaner(arr) {
    //variables that hold the arrays which will be return 
    let arr2 = []
    let arr1 = []
    //loop that goes through all the elements of arr
    //and pushed the appropriate elements to 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 1) {
            arr2.push(i)
        } else arr1.push(arr[i])
    }
    //returned the final arrays in an array
    return [arr1, arr2]
}