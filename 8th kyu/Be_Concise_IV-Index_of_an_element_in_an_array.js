/*
Task
Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.
*/

//answer    
function find(a, e) {
    //variable that holds the index position of e
    const i = a.indexOf(e)
    //returns the message based on the index position
    return i == -1 ? 'Not found' : i
}