/*
*** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
*/

//answer    
//used include method to check if the a (array) contain x in it
function check(a, x) { return a.includes(x) };