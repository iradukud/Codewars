/*
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
*/

//answer    
function isDigit(s) {
    //converted the inputted input into number (explicit conversion)
    //then return a boolean value based on whether it's number exist and accounted for 2 unique cases
    return Boolean(+s) || s == '-0' || s == '0.0'
}