/*
DESCRIPTION:
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

//Solution    
function consecutive(arr, a, b) {
    //variables that hold the position of a and b
    const postA = arr.indexOf(a)
    const postB = arr.indexOf(b)
    //return a boolean value depending on whether a and b are consecutive 
    return postA == 1 + postB || postB == 1 + postA
}