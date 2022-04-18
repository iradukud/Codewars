/*
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

//answer    
//If a the string ends with a exclamation mark recall the remove function with the exclamation mark removed,
//else return the string 
const remove =string =>   string.endsWith('!')? remove(string.slice(0,-1)) : string
