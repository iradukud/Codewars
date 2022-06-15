/*
DESCRIPTION:
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/

//Solution    
function getMissingElement(array) {
    //sorted the number array then find the index that didn't match element
    const missingNum = array.sort((a, b) => a - b).findIndex((x, i) => x != i)
    //return the missing num else if none exist(-1) then return 9  
    return missingNum != -1 ? missingNum : 9
}