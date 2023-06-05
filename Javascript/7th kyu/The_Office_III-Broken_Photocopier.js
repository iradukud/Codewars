/*
DESCRIPTION:
The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.

*/

//Solution    
function broken(x) {
    //returned the string with the 1s and 0s switched 
    return [...x].map(x => x == '0' ? '1' : '0').join('')
}