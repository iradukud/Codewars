/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

//answer    
//split the string into an array of words
//then split each word into an array of it's characters then split them then reverse their and and join them back
//then joined each word back together 
const reverseWords = str => str.split(' ').map(word => word.split('').reverse().join('')).join(' ')