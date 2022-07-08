/*
DESCRIPTION:
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/

//Solution    
function largest(n, xs) {
    //if n equals zero return an empty array
    if (n == 0) { return [] }
    //return the n largest elements
    return xs.sort((a, b) => a - b).slice(-n)
}