/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

//answer    
//checks to see if either the arguments is not a letter, if it is return -1
//else check if their the same case, if so return 1 else return 0
const sameCase = (a, b) => !(/[a-zA-Z]/).test(a)|| !(/[a-zA-Z]/).test(b)? -1 : a.toLowerCase() == a && b.toLowerCase() == b || a.toUpperCase() == a && b.toUpperCase() == b? 1: 0