/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

//answer    
//commpares the input string to its reverse string (got using several methods)
//use .toLowerCase() to account for deferent case levels
const isPalindrome = x => x.toLowerCase() == x.split('').reverse().join('').toLowerCase()
