/*
DESCRIPTION:
Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]
*/

//Solution    
function digitize(n) {
    //converted the number to an array then change the string elements to number elements
    return [...(n + '')].map(x => +x)
}