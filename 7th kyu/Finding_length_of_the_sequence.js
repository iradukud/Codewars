/*
DESCRIPTION:
As part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.

For example, for a given array arr

[0, -3, 7, 4, 0, 3, 7, 9]
Finding length between two 7s like

lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)
would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return 0, or in Haskell, Nothing.

*/

//Solution  
var lengthOfSequence = function (arr, n) {
    //if the given array does not contain only 2 occurences of n then return 0
    if (arr.filter(x => x == n).length != 2) { return 0 }
    //else return the distance between both n's
    return arr.lastIndexOf(n) - arr.indexOf(n) + 1
}