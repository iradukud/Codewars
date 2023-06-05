/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

//answer    
//converted the number into an strng and checkekd if it ended with 0
//if it did it recalled the same method but removed the last character,, repeated until it didn't end with zero
//then return the modified number
const noBoringZeros = n => String(n).endsWith(0) ? noBoringZeros(String(n).slice(0,-1)) : +n 
