/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/

//answer    
//converted each character to to unicode value and return their sum
//if an empty string was inputted return 0
const uniTotal = string => string? string.split('').reduce((sum,char)=> sum+ char.charCodeAt(0),0) : 0
