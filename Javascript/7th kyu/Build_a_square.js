/*
DESCRIPTION:
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

//Solution    
function generateShape(n) {
    //created an array of nth length with + repeated n times in each element
    //then join them with a line breaker (\n) and return the string
    return Array.from({ length: n }, _ => '+'.repeat(n)).join('\n')
}