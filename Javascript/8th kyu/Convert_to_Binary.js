/*
Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  // should return 1 
to_binary(5)  // should return 101 
to_binary(11) // should return 1011 
Example:

toBinary(1)  // should return 1 
toBinary(5)  // should return 101 
toBinary(11) // should return 1011 
*/

//answer    
function toBinary(n) {
    //used toString method to convert binary then converted back to number
    return +n.toString(2);
}