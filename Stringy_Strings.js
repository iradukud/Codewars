/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

//answer    
// created a new array with the length equal to size and made all it's elements equal zero
//the for each element I checked whether  it's index was divisible 2
//if it is then change the element to 1 else change to 0
//then join the elements to create and return a string
const stringy = size => Array(size).fill(0).map((char, index) => index%2===0 ? 1:0).join('')