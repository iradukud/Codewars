/*
Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
*/

//answer    
function none(arr, fun) {
    //if a element in the array passes the functon's test 
    //return false, else return true
    return !arr.some(fun)
}