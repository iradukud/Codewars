/*
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
*/

//answer    
//if the function is called without any arguments return an empty array
//else return an array with the elements starting from zero till inputted number (excludes inputted number) 
const arr = N=> N===undefined?[ ] : Array(N).fill(0).map((_,i) => i)