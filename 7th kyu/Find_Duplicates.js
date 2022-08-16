/*
DESCRIPTION:
Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []

*/

//Solution    
function duplicates(arr) {
    //variable the holds the duplicates and distant apart
    const arrz = []
    //loop the goes through the arr and puts duplicate items in the arrz
    for (i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            arrz.push([arr[i], Math.abs(arr.indexOf(arr[i]) - arr.lastIndexOf(arr[i]))])
        }
    }
    //return the final arrz of duplicates
    return [...new Set(arrz.sort((a, b) => a[1] - b[1]).map(x => x[0]))]
}