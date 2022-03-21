/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

//answer
//strings the string number into an array
//for each item in the array check perform fake binary conversion
//join the elements back together as a string and return it
const fakeBin= (x) => x.split('').map((number) => number<5? number=0:number=1 ).join('')
