/*
DESCRIPTION:
After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

Example
findSum(1,2,3,4); // returns 10 
findSum(1,-2);    // returns -1 
findSum();        // returns 0 
Hint: research the arguments object on google or read Chapter 4 from Eloquent Javascript

*/

//Solution    
function findSum() {
    //returned the sum of the given arguments, if one of the arguments was negative then return -1 instead 
    return [...arguments].some(x => x < 0) ? -1 : [...arguments].reduce((sum, num) => sum + num, 0)
}