/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

//answer    
function distinct(a) {
    //returned a array of unique elements
    return [...new Set(a)]
}