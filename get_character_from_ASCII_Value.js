/*
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A'
For ASCII table, you can refer to http://www.asciitable.com/
*/

//answer    
//retrieves the character from ascii vale usng String.fromCharCode()  
const getChar= c => String.fromCharCode(c)