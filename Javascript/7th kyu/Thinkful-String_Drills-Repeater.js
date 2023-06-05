/*
Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

Example: (Input1, Input2 --> Output)
"a", 5 --> "aaaaa"
*/

//answer    
function repeater(string, n) {
    //return a string with input string repeated n times  
    return string.repeat(n)
}