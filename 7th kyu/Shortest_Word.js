/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//answer    
//split the string into an array of words, then changed it word to it's character length
//return the min length value
const findShort = s => Math.min(...s.split(' ').map(x=> x.length))