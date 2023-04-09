/*
Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"
*/

//answer    
var repeatIt = function (str, n) {
    //if the value passed through str is a string return the str repeated n times
    //else return a specified string message  
    return typeof str == 'string' ? str.repeat(n) : "Not a string"
}