/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

//answer    
//converted the string into an array via split method
//used map method to make adjust on each element in the array 
//then return it back as a string via join method with dash parameter
const accum= s => s.split('').map((l,i)=> l.toUpperCase()+l.toLowerCase().repeat(i)).join('-')